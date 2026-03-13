import Box from "@mui/material/Box";
import DocsSidebar from "./_components/DocsSidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex", minHeight: "calc(100vh - 64px - 69px)" }}>
      <DocsSidebar />
      <Box component="main" sx={{ flexGrow: 1, overflowX: "hidden" }}>
        {children}
      </Box>
    </Box>
  );
}
