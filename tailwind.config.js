module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        keyframes: {
            'show': {
                '80%': {
                    opacity: '0',
                },
                '100%': {
                    opacity: '1',
                },
            },
            'hide': {
              '0%': {
                  opacity: '1',
              },
              '10%': {
                  opacity: '0',
              },
          },
          'show-close': {
            '75%': {
                opacity: '0',
            },
            '85%': {
              transform: 'rotate(0deg)',
            },
            '100%': {
                transform: 'rotate(45deg)',
                opacity: '1',
            },
        },
        'hide-close': {
          '0%': {
              transform: 'rotate(45deg)',
              opacity: '1',
          },
          '20%': {
            transform: 'rotate(0deg)',
          },
          '30%': {
              opacity: '0',
          },
      },
            'gradient-y': {
              '0%, 100%': {
                  'background-size':'400% 400%',
                  'background-position': 'center top'
              },
              '50%': {
                  'background-size':'200% 200%',
                  'background-position': 'center center'
              }
          },
          'gradient-x': {
              '0%, 100%': {
                  'background-size':'200% 200%',
                  'background-position': 'left center'
              },
              '50%': {
                  'background-size':'200% 200%',
                  'background-position': 'right center'
              }
          },
          'gradient-xy': {
              '0%, 100%': {
                  'background-size':'400% 400%',
                  'background-position': 'left center'
              },
              '50%': {
                  'background-size':'200% 200%',
                  'background-position': 'right center'
              }
          },
          'close-window': {
            '0%': {
              'width': '100%',
              'height': '100%',
              'opacity': 0.6,
              'box-shadow':  'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'
            },
            '50%': {
              'width': '60px',
              'height': '100%',
              'opacity': 0.6,
              'box-shadow':  'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'
            },
            '100%': {
              'width': '20px',
              'height': '20px',
              'opacity': 0,
              'box-shadow':  'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'
            },
        },
          'open-window': {
            '0%': {
              'width': '20px',
              'height': '20px',
              'opacity': 0,
              'box-shadow':  'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'
            },
            '50%': {
              'width': '60px',
              'opacity': 0.6,
              'height': '100%',
              'box-shadow':  'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'
            },
            '100%': {
              'width': '100%',
              'height': '100%',
              'opacity': 0.6,
              'box-shadow':  'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'
            },
          }
        },
        animation: {
            'show': 'show 1s ease-in-out 2s',
            'show-close': 'show-close 3s ease-in-out',
            'hide': 'hide 1s ease-in-out',
            'hide-close': 'hide-close 3s ease-in-out',
            'gradient-x':'gradient-x 15s ease infinite',
            'gradient-y':'gradient-y 15s ease infinite',
            'gradient-xy':'gradient-xy 15s ease infinite',
            'open-window': 'open-window 2s ease-in-out 1s',
            'close-window': 'close-window 2s ease-in-out'
        }
    },
},
  variants: {
    extend: {},
  },
  plugins: [],
}
