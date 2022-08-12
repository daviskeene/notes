import { Box, Flex, Heading, Select } from 'theme-ui'
import TypingArea from 'components/TypingArea'
import useConfigStore from './store/config'
import { theme } from './utils/constant'
import { useCallback } from 'react'

const App = () => {
  const { config, setTheme } = useConfigStore()

  const handleSelectThemeChange = useCallback(
    (e) => {
      const selectedValue = e.target.options[e.target.selectedIndex].value
      setTheme(selectedValue)
    },
    [setTheme]
  )

  return (
    <Flex
      sx={{
        maxWidth: [500, 700, 900],
        mx: 'auto',
        py: 3,
        px: [4, 5],
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Heading>/rant</Heading>
      <Flex
        sx={{
          minHeight: 80,
          flexGrow: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
          <TypingArea />
          <Box
            sx={{
              mt: 4,
            }}
          >
          </Box>
      </Flex>
      <Flex
        sx={{
          py: 3,
          justifyContent: ['center', 'center', 'space-between'],
          alignItems: 'center',
          color: 'GrayText',
          flexDirection: ['column', 'column', 'row'],
        }}
      >
        <Box sx={{ mb: 3 }}>
          &copy; {new Date().getFullYear()} / Davis Keene
        </Box>
        <Flex sx={{ mb: 3 }}>
          <Select
            onChange={handleSelectThemeChange}
            sx={{ py: 0, pr: 30, width: 'auto', ml: 3 }}
            value={config.theme}
          >
            {Object.entries(theme).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </Select>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default App
