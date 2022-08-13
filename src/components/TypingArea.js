import React, { memo, useCallback, useEffect, useState } from 'react'
import { Box, Textarea } from 'theme-ui'
import ReactMarkdown from 'react-markdown'

const TypingArea = memo(({ inputRef }) => {

  let search = window.location.search;
  let params = new URLSearchParams(search);

  const [value, setValue] = useState(params.get('text') || '');

  const ABOUT_TEXT = '/notes is an online text document where you can freely write your thoughts. No distractions. Markdown support. Just start typing.\n>'

  const focusInput = useCallback(() => {    
    return inputRef.current.focus()
  }, [inputRef])

  const handleInputChange = useCallback(
    (e) => {
      const newValue = e.target.value
      setValue(newValue);
      window.scrollTo(0, document.body.scrollHeight);
    }
   , [])

  useEffect(() => {

    // in the event that there's already text loaded,
    // make sure the cursor is at the end
    focusInput();
    var val = inputRef.current.value;
    inputRef.current.value = '';
    inputRef.current.value = val;

  }, [focusInput, inputRef])


  return (
    <Box
      sx={{
        padding: '4em 0 4em 0'
      }}
      onClick={() => focusInput()}>
      <Box
        sx={{
          bg: 'rgba(0,0,0,0)',
          borderRadius: 5,
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
            autoFocus
            border={'1px solid text'}
            sx={{
              width: 10,
              opacity: 0,
              position: 'fixed',
            }}
          />
          <ReactMarkdown>
            {value ? value + '&nbsp;' : ABOUT_TEXT}
          </ReactMarkdown>
        </Box>
      </Box>
    </Box>
  )
})

export default TypingArea
