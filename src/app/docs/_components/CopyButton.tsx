"use client";

import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import CheckIcon from "@mui/icons-material/Check";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Tooltip title={copied ? "Copied!" : "Copy"} placement="left">
      <IconButton
        onClick={handleCopy}
        size="small"
        sx={{
          color: copied ? "success.main" : "text.disabled",
          transition: "color 0.15s",
          "&:hover": { color: "text.primary" },
        }}
      >
        {copied ? (
          <CheckIcon sx={{ fontSize: 15 }} />
        ) : (
          <ContentCopyIcon sx={{ fontSize: 15 }} />
        )}
      </IconButton>
    </Tooltip>
  );
}
