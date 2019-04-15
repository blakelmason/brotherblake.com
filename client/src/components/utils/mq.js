const bp = [576, 768, 992, 1200];
const mq = {
  sm: `@media (min-width: ${bp[0]}px)`,
  md: `@media (min-width: ${bp[1]}px)`,
  lg: `@media (min-width: ${bp[2]}px)`,
  xl: `@media (min-width: ${bp[3]}px)`
};

export default mq;
