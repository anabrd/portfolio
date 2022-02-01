import './Circles.css';

function Circles(props) {
  return (
    <div className="circle-wrapper">
      <div
        className="circle circle-outer"
        style={props.theme == 'light' ? { background: 'var(--light)' }
          : { background: 'var(--blue)' }}
      />
      <div className="circle circle-inner" />
      <div
        className="circle circle-outer"
        style={props.theme == 'light' ? { background: 'var(--light)' }
          : { background: 'var(--blue)' }}
      />
    </div>
  );
}

export default Circles;
