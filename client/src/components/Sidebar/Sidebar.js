/** @jsx jsx */
import { Transition } from 'react-transition-group';
import { FaTimes } from 'react-icons/fa';
import { jsx } from '@emotion/core';
import { Button } from 'react-bootstrap';
import Body from './Body';

const timeout = 400;
const width = 300;

const styleSidebar = {
  position: 'fixed',
  width: width,
  height: '150%',
  transition: 'all 0.5s ease 0s',
  transform: 'translate3d(-100%, 0px, 0px)',
  zIndex: 1100
};
const transitionsSidebar = {
  entering: { transform: '' },
  entered: { transform: '' },
  exiting: { transform: 'translate3d(-100%, 0px, 0px)' },
  exited: { transform: 'translate3d(-100%, 0px, 0px)' }
};

const stylesOverlay = {
  position: 'fixed',
  width: '100vw',
  height: '120vh',
  background: 'rgba(0, 0, 0, 0.3)',
  opacity: 0,
  transition: 'opacity 0.3s ease 0s, transform 0s ease 0.3s',
  zIndex: 1100
};
const transitionsOverlay = {
  entering: {
    transform: '',
    opacity: 1,
    transition: 'opacity 0.3s ease 0s'
  },
  entered: {
    transform: '',
    opacity: 1
  },
  exiting: {
    transform: 'translate3d(100%, 0px, 0px)',
    opacity: 0
  },
  exited: {
    transform: 'translate3d(100%, 0px, 0px)',
    opacity: 0
  }
};

const stylesContainer = {
  width: width,
  transition: 'width .5s ease 0s'
};
const transitionsContainer = {
  entering: { width: width },
  entered: { width: width },
  exiting: { width: 0 },
  exited: { width: 0 }
};

const Sidebar = ({ inProp, close }) => (
  <Transition in={inProp} timeout={timeout}>
    {state => (
      <div
        style={{
          ...stylesContainer,
          ...transitionsContainer[state]
        }}
      >
        <div
          className="d-xl-none"
          style={{
            ...stylesOverlay,
            ...transitionsOverlay[state]
          }}
          onClick={close}
        />
        <div
          className="bg-white shadow border-right"
          style={{
            ...styleSidebar,
            ...transitionsSidebar[state]
          }}
        >
          <div
            style={{ flexGrow: '1', height: '100vh' }}
            className="d-flex flex-column"
          >
            <div
              className="d-flex align-items-center justify-content-end position-absolute"
              style={{
                width: 300,
                padding: '6px 16px 12px 0px',
                pointerEvents: 'none'
              }}
            >
              <Button
                onClick={close}
                variant="outline-light"
                css={{
                  background: 'white',
                  transition: 'color .3s',
                  borderRadius: '50%',
                  padding: 6,
                  '&:hover': {
                    color: 'black',
                    background: '#f8f9fa'
                  },
                  zIndex: 1,
                  pointerEvents: 'auto'
                }}
                className="shadow border d-flex align-items-center text-grey"
              >
                <FaTimes size="1.25rem" />
              </Button>
            </div>
            <div
              style={{ overflowY: 'auto', paddingTop: 5 }}
              className="flex-fill px-3 pb-3 bg-white"
            >
              <div style={{ height: 75 }} />
              <div
                style={{
                  display: 'grid',
                  gridRowGap: 16,
                  userSelect: 'none'
                }}
              >
                <Body />
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </Transition>
);

export default Sidebar;
