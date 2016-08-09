const backgroundColor = '#002b36'
const foregroundColor = '#839496'
const cursorColor = 'rgba(181, 137, 0, 0.6)'
const borderColor = '#002b36'
const activeTabBorderColor = '#2aa198' // cyan
const inactiveColor = '#001f27' // cyan

const colors = [
  backgroundColor,
  '#dc322f', // red
  '#859900', // green
  '#b58900', // yellow
  '#268bd2', // blue
  '#6c71c4', // violet
  '#2aa198', // cyan
  '#eee8d5', // light gray
  '#586e75', // medium gray
  '#dc322f', // red
  '#586e75', // green
  '#657b83', // yellow
  '#839496', // blue
  '#6c71c4', // violet
  '#2aa198', // cyan
  '#ffffff', // white
  foregroundColor
]

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}
      * {
        -webkit-font-feature-settings: "liga" on, "calt" on, "dlig" on !important;
        text-rendering: optimizeLegibility !important;
        font-weight: 500;
      }
      .tabs_list {
        border: 0;
      }
      .terms_terms { padding: 10px 11px; }
      .tab_tab {
        color: ${foregroundColor} !important;
        background-color: ${inactiveColor};
      }
      .tab_text {border:0px!important; border-top: 2px solid rgba(255,255,255, 0)!important;}
      .tab_text span { color: rgba(255,255,255,0.4) }
      .tab_text.tab_textActive span { font-weight: bold; color: rgba(255,255,255, 0.9); }
      .tab_text.tab_textActive { border-top: 2px solid rgba(255,255,255, 0.4)!important; }
      .tab_tab:before {
        border: 0;
      }
      .header_header {
        background-color: ${inactiveColor}!important;
      }
      .tab_tab.tab_active {
        border: transparent !important;
        font-weight: bold;
        color: #b3b3b3 !important;
        background-color: ${backgroundColor};
      }
    `
  })
}
