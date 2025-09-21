import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function F_ReactPortals() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  
    return (
      <div>
        <h1>My App</h1>
        <button onClick={openModal}>Open Modal</button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>Modal Content</h2>
          <p>This is the content inside the modal!</p>
        </Modal>
      </div>
    );
  }

function Modal({ isOpen, onClose, children }: {isOpen: any, onClose: any, children: React.ReactNode}) {
  if (!isOpen) {
    return null;
  }
  const a = document.getElementById('modal-root'); // public/index.html make new div with id modal-root
  if(!a) return <div>sorry</div>

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>, a
  );
}



export default F_ReactPortals

/**

React Portals are a feature in React that allow you to render a component or elements outside the main DOM hierarchy of your application. This is particularly useful when you need to break out of the typical parent-child relationship within the component tree but still maintain the same React context and event handling.



How Do React Portals Work?
Normally, React components render their children within the DOM node that matches their parent component. However, with portals, you can render a component into a different part of the DOM, even outside of the root DOM node where your React app is mounted. 



When Should React Portals Be Used?
React Portals are particularly useful in the following scenarios:

Modals, Dialogs, and Overlays:
These elements often need to be rendered outside the parent component’s DOM hierarchy to avoid CSS conflicts (like overflow or z-index issues) and to ensure proper positioning.

Tooltips and Popovers:
Similar to modals, tooltips and popovers often need to break out of the normal flow of the DOM to ensure they are rendered correctly above other elements.

Dropdowns:
Dropdown menus that need to escape overflow issues in their parent containers can be rendered via portals to avoid clipping.

Performance Optimization:
In some cases, using a portal to render a heavy component outside the main DOM tree can help optimize performance, especially if it needs to update frequently without affecting the rest of the tree.

 */