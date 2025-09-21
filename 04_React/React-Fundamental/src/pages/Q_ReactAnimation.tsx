// npm install @react-spring/web

import { useSpring, animated } from '@react-spring/web';

function MyComponent() {
  const styles = useSpring({
    loop: true,
    to: [{ opacity: 1, color: '#ffaaee' }, { opacity: 0, color: 'rgb(14,26,19)' }],
    from: { opacity: 0, color: 'red' },
  });

  return <animated.div style={styles}>I will fade in and out</animated.div>;
}

export default MyComponent;


// there are some other library as well 
// 1. npm install react-transition-group
// 2. npm install framer-motion