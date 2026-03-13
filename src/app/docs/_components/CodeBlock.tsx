import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography, { type TypographyProps } from "@mui/material/Typography";
import { JetBrains_Mono } from "next/font/google";
import { codeToTokens } from "shiki";
import CopyButton from "./CopyButton";

const mono = JetBrains_Mono({ subsets: ["latin"], display: "swap" });

interface Props {
  children: string;
  lang?: string;
  filename?: string;
}

export default async function CodeBlock({ children, lang = "tsx", filename }: Props) {
  const code = children.trim();
  const { tokens } = await codeToTokens(code, { lang: lang as Parameters<typeof codeToTokens>[1]["lang"], theme: "github-dark" });

  const fontFamily = mono.style.fontFamily;
  const lastIndex = tokens.length - 1;

  return (
    <Box
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        my: 2,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 0.5,
          bgcolor: "background.paper",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: "text.disabled",
            fontFamily,
            fontSize: "0.7rem",
            letterSpacing: "0.05em",
            userSelect: "none",
          }}
        >
          {filename ?? lang}
        </Typography>
        <CopyButton code={code} />
      </Box>

      <Divider />

      {/* Code */}
      <Box sx={{ overflowX: "auto", bgcolor: "background.paper" }}>
        <Box
          component="table"
          sx={{
            borderCollapse: "collapse",
            fontFamily,
            fontSize: "0.8125rem",
            width: "100%",
          }}
        >
          <Box component="tbody">
            {tokens.map((lineTokens, lineIndex) => (
              <Box component="tr" key={lineIndex}>
                {/* Line number cell */}
                <Box
                  component="td"
                  sx={{
                    userSelect: "none",
                    textAlign: "right",
                    pl: 2,
                    pr: "12px",
                    pt: lineIndex === 0 ? 2 : 0,
                    pb: lineIndex === lastIndex ? 2 : 0,
                    color: "rgba(255,255,255,0.2)",
                    width: "1%",
                    minWidth: "2ch",
                    fontSize: "0.85em",
                    verticalAlign: "top",
                    whiteSpace: "pre",
                    lineHeight: 1.7,
                  }}
                >
                  {lineIndex + 1}
                </Box>

                {/* Vertical divider cell */}
                <Box component="td" sx={{ p: 0, width: "1px" }}>
                  <Divider orientation="vertical" sx={{ height: "100%", borderRightWidth: 1 }} />
                </Box>

                {/* Code cell */}
                <Box
                  component="td"
                  sx={{
                    pl: 2,
                    pr: "20px",
                    pt: lineIndex === 0 ? 2 : 0,
                    pb: lineIndex === lastIndex ? 2 : 0,
                    verticalAlign: "top",
                    whiteSpace: "pre",
                    lineHeight: 1.7,
                  }}
                >
                  {lineTokens.map((token, tokenIndex) => {
                    const sx: TypographyProps["sx"] = {
                      color: token.color,
                      fontStyle: token.fontStyle != null && (token.fontStyle & 1) ? "italic" : undefined,
                      fontWeight: token.fontStyle != null && (token.fontStyle & 2) ? "bold" : undefined,
                      textDecoration: token.fontStyle != null && (token.fontStyle & 4) ? "underline" : undefined,
                    };
                    return (
                      <Typography key={tokenIndex} component="span" variant="inherit" sx={sx}>
                        {token.content}
                      </Typography>
                    );
                  })}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
