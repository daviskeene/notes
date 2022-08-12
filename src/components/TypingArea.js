import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { Box, Flex, Input, Textarea } from 'theme-ui'

const TypingArea = memo(() => {
  const inputRef = useRef()
  const [blur, setBlur] = useState(false)
  const [value, setValue] = useState('');

  const focusInput = useCallback(() => {    
    return inputRef.current.focus()
  }, [])

  const handleOverlayClick = useCallback(
    (e) => {
      focusInput()
    },
    [focusInput]
  )

  const handleInputChange = useCallback(
    (e) => {
      const newValue = e.target.value
      setValue(newValue);
      window.scrollTo(0, document.body.scrollHeight);
    }
  )

  useEffect(() => {
    const isInputFocused =
      inputRef.current && inputRef.current === document.activeElement

    if (isInputFocused) setBlur(false)
    else setBlur(true)

  }, [inputRef])


  return (
    <Box>
      <Box
        sx={{
          bg: 'rgba(0,0,0,0)',
          borderRadius: 5,
          filter: blur && 'blur(5px)',
          opacity: blur && 0.25,
        }}
      >
        <Box
          sx={{
            px: 1,
            fontFamily: 'monospace',
            fontSize: 21,
            color: 'text',
            lineHeight: '35px',
            whiteSpace: 'pre-wrap',
            overflow: 'scroll',
            border: '1px solid text'
          }}
        >
          <Textarea
            ref={inputRef}
            type='text'
            value={value}
            onChange={handleInputChange}
            maxHeight={'2em'}
            overflow={'scroll'}
            onBlur={() => {
              setBlur(true)
            }}
            onFocus={() => setBlur(false)}
            autoFocus
            border={'1px solid text'}
            sx={{
              width: 10,
              position: 'absolute',
              opacity: 0,
              position: 'fixed',
            }}
          />
          {value ? value : 'Start typing...'}
        </Box>
      </Box>
      {blur && (
        <Flex
          onClick={handleOverlayClick}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            justifyContent: 'center',
            alignItems: 'center',
            color: 'text',
            fontWeight: 500,
            cursor: 'pointer',
            fontSize: 20,
            flexDirection: 'column',
          }}
        >
          {(
            <>
              <div>
                Click to focus.
              </div>
            </>
          )}
        </Flex>
      )}
    </Box>
  )
})

export default TypingArea
