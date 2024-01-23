import React, { useState } from 'react';
import { PiFoldersFill } from "react-icons/pi";
import { IoCloseSharp } from "react-icons/io5";

function RabbitHole() {
    const [openPopups, setOpenPopups] = useState({});
    const [highestZIndex, setHighestZIndex] = useState(0);

    const popupWidth = 600; // Width of the popup
    const popupHeight = 300; // Estimated height of the popup

    const getCenterPosition = () => {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const x = (viewportWidth - popupWidth) / 2;
        const y = (viewportHeight - popupHeight) / 2;

        return { left: x, top: y };
    };

    const handleFolderClick = (folderType) => {
        const newZIndex = highestZIndex + 1;
        setHighestZIndex(newZIndex);

        setOpenPopups(prev => {
            return {
                ...prev,
                [folderType]: {
                    open: true,
                    position: prev[folderType]?.position || getCenterPosition(),
                    zIndex: newZIndex // Assign new z-index
                }
            };
        });
    };

    const handleCloseClick = (folderType, e) => {
        e.stopPropagation();
        setOpenPopups(prev => ({ ...prev, [folderType]: { ...prev[folderType], open: false } }));
    };

    const startDrag = (e, folderType) => {
        const popup = document.getElementById(`popup-${folderType}`);
        if (!popup) return;

        e.preventDefault();
        let startX = e.clientX;
        let startY = e.clientY;
        const headerHeight = 90; // Height of the header

        const onMouseMove = (event) => {
            let dx = event.clientX - startX;
            let dy = event.clientY - startY;

            const rect = popup.getBoundingClientRect();
            const currentPopupHeight = rect.height;

            let newLeft = Math.max(0, Math.min(popup.offsetLeft + dx, window.innerWidth - popupWidth));
            let newTop = Math.max(headerHeight, Math.min(popup.offsetTop + dy, window.innerHeight - currentPopupHeight));

            popup.style.left = `${newLeft}px`;
            popup.style.top = `${newTop}px`;
            startX = event.clientX;
            startY = event.clientY;
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    const folderTypes = {
        'Articles': { emoji: '📰', text: 'Articles' },
        'Podcasts': { emoji: '🎙️', text: 'Podcasts' },
        'Tools': { emoji: '🛠️', text: 'Tools' },
        'Websites': { emoji: '💻', text: 'Websites' }
    };

    const folderContent = {
        'Articles': (
            <div>
                <h4><a href="https://limited.systems/articles/frugal-computing/" target='_blank' rel="noreferrer">Frugal Computing: On the need for low-carbon and sustainable computing</a></h4>
            </div>
        ),
        'Podcasts': (
            <div>
                <h4><a href="https://open.spotify.com/episode/4Z5isq5B0cvWumaLwaXOKq?si=bc2ea4ea8759457e" target='_blank' rel="noreferrer">UX Podcast #298: Colonised Thinking and Figma</a></h4>
            </div>
        ),
        'Tools': (
            <div>
                <h4><a href="https://www.uiguideline.com/components" target='_blank' rel="noreferrer">UI Guideline: Component Standardization</a></h4>
                <hr />
                <h4><a href="https://huemint.com/" target='_blank' rel="noreferrer">Huemint: AI color palette generator</a></h4>
                <hr />
                <h4><a href="https://fontjoy.com/" target='_blank' rel="noreferrer">Fontjoy: AI font pairing</a></h4>
            </div>
        ),
        'Websites': (
            <div>
                <h4><a href="https://www.webdesignmuseum.org/" target='_blank' rel="noreferrer">Web Design Museum</a></h4>
                <hr />
                <h4><a href="https://www.figma.com/community/file/914263431963912367" target='_blank' rel="noreferrer">Windows 95 Design System</a></h4>
            </div>
        )
    };

    return (
        <div>
            <section id="rabbithole-section">
                <div className='container'>
                    <div className='row' id="mb-10">
                        <h2 id="profile-heading">Rabbit Holes</h2>
                    </div>
                    <div className='row' id="mb-20">
                        <h3>A semi-curated list of interesting things.</h3>
                    </div>
                    <div className='row' id="rabbitholes">
                        {Object.entries(folderTypes).map(([type, { text }]) => (
                            <div key={type} className='col-3' onClick={() => handleFolderClick(type)}>
                                <PiFoldersFill id="folders" />
                                <h3>{text}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {Object.entries(folderTypes).map(([type, { emoji, text }]) => {
                const popupState = openPopups[type];
                return popupState && popupState.open && (
                    <div
                        key={type}
                        id={`popup-${type}`}
                        className="popup"
                        style={{ left: popupState.position.left, top: popupState.position.top, zIndex: popupState.zIndex }}
                        onMouseDown={(e) => e.stopPropagation()}
                    >
                        <div className="popup-header" onMouseDown={(e) => startDrag(e, type)}>
                            <h4>{emoji} {text}</h4>
                            <button onClick={(e) => handleCloseClick(type, e)}><IoCloseSharp /></button>
                        </div>
                        <div className="popup-content">
                            {folderContent[type]}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default RabbitHole;