// Users Data
console.log(LC_config.selector)
console.log(LC_config.url)
console.log(LC_config.trigger)

let LC_Url = LC_config.url
LC_Url = LC_Url.replace(/^(.+?)\/*?$/, '$1')
LC_Widget_Url = `${LC_Url}/widget`

// Cleaning & Append widget the URL
console.log(LC_Url)
console.log(LC_Widget_Url)

// Injecting iframe
const LC_placeholder = document.getElementById(LC_config.selector)
var LC_iframe = document.createElement('iframe')
LC_iframe.src = LC_Widget_Url
LC_placeholder.appendChild(LC_iframe)

// Styles
const LC_styles = {
	borderRadius: '6px',
	height: '308px',
	boxShadow: '0 0 1px rgba(99,114,130,0.32), 0 8px 16px rgba(27,39,51,0.08)',
	backgroundColor: '#fff',
	position: 'absolute',
	display: 'none',
	marginTop: '10px'
}

// Removing iframe border
Object.assign(LC_iframe.style, LC_styles)
LC_iframe.frameBorder = '0'

// Toggle widget
const LC_trigger = document.getElementById(LC_config.trigger)
LC_trigger.setAttribute('onclick', 'LC_Widget_Launch()')
function LC_Widget_Launch() {
	LC_iframe.style.display =
		LC_iframe.style.display === 'block' ? 'none' : 'block'
}
