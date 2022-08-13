import { Box, Flex, Select, Button, Link } from 'theme-ui'
import TypingArea from 'components/TypingArea'
import useConfigStore from './store/config'
import { theme } from './utils/constant'
import { useCallback, useEffect, useRef } from 'react'

const App = () => {
  const { config, setTheme } = useConfigStore()
  const typingRef = useRef();

  useEffect(() => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    if (params.get('theme')) {
      setTheme(params.get('theme'))
  }}

  ,[setTheme])

  const handleSelectThemeChange = useCallback(
    (e) => {
      const selectedValue = e.target.options[e.target.selectedIndex].value
      setTheme(selectedValue)
    },
    [setTheme]
  )

  const copyTextToClipboard = () => {
    let copyText = encodeURIComponent(typingRef.current.value)
    navigator.clipboard.writeText(typingRef.current.baseURI.slice(0, typingRef.current.baseURI.lastIndexOf('/')) + '?text=' + copyText + '&theme=' + config.theme)
  }

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
      <Flex
        sx={{
          minHeight: 80,
          flexGrow: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
          <TypingArea inputRef={typingRef} />
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
          <Link href={'https://daviskeene.com'} sx={{textDecoration: 'none', color: 'text'}}>Davis Keene</Link> &copy; {new Date().getFullYear()}
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
          <Button sx={{marginLeft: '1em',
                      color: 'text',
                      backgroundColor: 'background',
                      border: '1px solid text',
                      ':hover' : {backgroundColor: 'text',
                                  color: 'background'},
                       ':active' : {
                        color: 'text',
                        backgroundColor: 'background',
                       }}}
            onClick={() => copyTextToClipboard()}
            >
            Copy Link
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default App
