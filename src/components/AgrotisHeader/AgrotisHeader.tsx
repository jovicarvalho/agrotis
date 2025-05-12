import SvgIcon from '../AgrotisSvg/AgrotisSvg';
import AgrotisBox from '../AgrotisBox';

export const AgrotisHeader = () => (
  <AgrotisBox
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      height: '56px',
      backgroundColor: '#fff',
      boxShadow: 3,
      padding: '16px 0',
      display: 'flex',
      justifyContent: 'center',
      gap: '6px',
      zIndex: 1300,
    }}
  >
    <SvgIcon nome="AgrotisLogo" />
    <SvgIcon width={68} nome="AgrotisExtenso" />
  </AgrotisBox>
);
