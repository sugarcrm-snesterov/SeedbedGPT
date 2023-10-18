import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import { useState } from "react"
import ChatPanel from "./features/chat/ChatPanel"
import TabPanel from "./components/TabPanel"

function App() {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Container className="app">
      <Box className="tab-container">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Chat" />
            <Tab label="Settings" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <ChatPanel />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Settings here
        </TabPanel>
      </Box>
    </Container>
  )
}

export default App
