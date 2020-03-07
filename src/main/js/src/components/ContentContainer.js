import React from 'react';

const containerStyle = {
width: '80%',
margin: '0 auto',
textAlign:'center',
padding:'5em',
background:'#ff7700',
boxShadow: '10px 10px 2em #888888',
overflow: 'hidden',
border: '.5em double black',

// backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Keyboard_cat.jpg/220px-Keyboard_cat.jpg')",
// backgroundColor: 'rgba(255, 255, 255, 0.4)',
// backgroundBlendMode: 'lighten'
//border: '10em double #32a1ce'
}

export const ContentContainer = props => (
    <div style={containerStyle}>
        {props.children}
    </div>
);

export default ContentContainer