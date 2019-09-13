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

const LC_cont_styles = {
	backgroundColor: '#fff',
	minHeight: '558px',
	minWidth: '348px',
	border: 0,
	boxShadow: '0 0 1px rgba(99, 114, 130, 0.32), 0 8px 16px rgba(27, 39, 51, 0.08)',
	willChange: 'height, margin-top, opacity',
	transition: 'margin-top 0.15s ease-out, opacity 0.1s ease-out, height 0.3s ease-out'
}

const LC_parent = document.getElementById('navchangelog').getElementsByClassName('dropdown-menu')[0];
Object.assign(LC_parent.style, LC_cont_styles)
LC_parent.style.setProperty ("border-radius", "6px", "important");

// Styles
const LC_styles = {
	height: '100%',
	width: '100%',
	position: 'absolute',
	top: 0,
	bottom: 0,
	border: 0,
	margin: 0,
	padding: 0,
	transition: 'height 0.3s ease-out'
}

// Removing iframe border
Object.assign(LC_iframe.style, LC_styles);
LC_iframe.style.setProperty ("border-radius", "6px", "important");
LC_iframe.frameBorder = '0'

// Toggle widget
// const LC_trigger = document.getElementById(LC_config.trigger)
// LC_trigger.setAttribute('onclick', 'LC_Widget_Launch()')
// function LC_Widget_Launch() {
// 	LC_iframe.style.display =
// 		LC_iframe.style.display === 'block' ? 'none' : 'block'
// }
