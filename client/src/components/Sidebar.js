/** @jsx jsx */
import { Transition } from 'react-transition-group';
import { FaTimes } from 'react-icons/fa'
import { jsx } from '@emotion/core'
import { Button } from 'react-bootstrap';

const timeout = 400;
const width = 300;

const styleSidebar = {
  position: 'fixed',
  width: width,
  height: '150%',
  transition: 'all 0.5s ease 0s',
  transform: 'translate3d(-100%, 0px, 0px)',
  overflow: 'auto',
  zIndex: 1100
}
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
}
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
}

const stylesContainer = {
  width: width,
  transition: 'width .5s ease 0s'
}
const transitionsContainer = {
  entering: { width: width },
  entered: { width: width },
  exiting: { width: 0 },
  exited: { width: 0 }
}

const Sidebar = ({ inProp, close }) => (
  <Transition in={inProp} timeout={timeout}>
    {state =>
      <div style={{
        ...stylesContainer,
        ...transitionsContainer[state]
      }}>
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
          <div style={{ overflow: 'auto', flexGrow: '1', whiteSpace: 'nowrap', height: '100vh' }}>
            <div className="m-3 d-flex align-items-center justify-content-end">
              <Button
                variant="outline-light"
                css={{
                  borderRadius: '50%',
                  padding: 6
                }}
                className="shadow border d-flex align-items-center"
              >
                <FaTimes
                  size="1.25rem"
                  onClick={close}
                  css={{
                    transform: 'scale(1)',
                    color: '#969696',
                    transition: 'color .8s',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    '&:hover': {
                      color: 'black'
                    }
                  }}
                  className="text-grey"
                />
              </Button>
            </div>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>

          </div>
        </div>
      </div>
    }
  </Transition>
)

export default Sidebar;