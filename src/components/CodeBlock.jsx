/* eslint-disable */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

export default (props) => {
  delete defaultProps.theme;
  const className = props.children.props.className || '';
  const matches = className.match(/language-(?<lang>.*)/);
  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children}
      language={matches && matches.groups && matches.groups.lang ? matches.groups.lang : ''}
    >
      {
      ({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => (
        <pre className={`rounded-md ${className}`} style={style}>
          <code className={className}>
            {tokens.map((line, i) => {
              if (i === tokens.length - 1) return null;
              return (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              );
            })}
          </code>
        </pre>
      )
      }
    </Highlight>
  );
};
