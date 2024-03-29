import { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navbar({ navItems }) {
  return (
    <div className="nbr">
      <p className="nbr-coupon">Coupons</p>
      {navItems.map((item, index) => (
        <a key={index} href={item.link} className="nav-link">
          {item.text}
        </a>
      ))}
      <div className="sidebtn">
        <div className="pr-subs">
          <button className="bn-subs">Subscribe</button>
        </div>
        <button className="btn-custom">
          <span className="material-symbols-outlined">person</span>
        </button>
        <button className="btn-custom">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="btn-custom">
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
    </div>
  );
}

function SideNav({ navItems }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button 
        className="dropbtn" 
        onClick={handleShow} 
        style={{ 
          backgroundColor: '#001627', 
          width: '100%',
          textAlign: 'left',
          paddingLeft: '5px', 
          paddingTop: '5px', 
          marginLeft: '0', 
          color: 'white' // Set text color to white
        }}
      >
        <span className="material-symbols-outlined" style={{ color: 'white' }}>menu</span> {/* Set icon color to white */}
      </button>

      <Offcanvas show={show} onHide={handleClose} className="sidenav-offcanvas">
        <Offcanvas.Header closeButton style={{ backgroundColor: '#001627', color: 'white' }}>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ backgroundColor: '#001627', color: 'white' }}>
          <ul style={{ listStyle: 'none' }}> {/* Set list color to white */}
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.link} style={{ color: 'white' }}>{item.text}</a> {/* Set link text color to white */}
              </li>
            ))}
          </ul>
          <div className="pr-subs">
            <button className="bn-subs">Subscribe</button>
          </div>
          <button className="btn-custom">
            <span className="material-symbols-outlined" style={{ color: 'white' }}>person</span> {/* Set icon color to white */}
          </button>
          <button className="btn-custom">
            <span className="material-symbols-outlined" style={{ color: 'white' }}>notifications</span> {/* Set icon color to white */}
          </button>
          <button className="btn-custom">
            <span className="material-symbols-outlined" style={{ color: 'white' }}>search</span> {/* Set icon color to white */}
          </button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Navigation({ navItems }) {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobileView) {
    return <SideNav navItems={navItems} />;
  } else {
    return <Navbar navItems={navItems} />;
  }
}

export default Navigation;
