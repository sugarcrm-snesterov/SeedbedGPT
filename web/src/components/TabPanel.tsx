import Box from "@mui/material/Box"

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props

  return (
    <>
      {value === index && (
        <Box sx={{ p: 3, height: "100%; overflow: hidden" }}>{children}</Box>
      )}
    </>
  )
}
export default TabPanel
