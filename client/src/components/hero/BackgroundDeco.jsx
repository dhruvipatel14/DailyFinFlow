import React from 'react'

const BackgroundDeco = () => {
    return (
        <>
            <div className="absolute top-0 right-0 -mt-20 opacity-50">
                <svg width="404" height="384" fill="none" viewBox="0 0 404 384">
                    <defs>
                        <pattern id="pattern-squares" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" className="text-blue-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="384" fill="url(#pattern-squares)" />
                </svg>
            </div>
            <div className="absolute bottom-0 left-0 -mb-20 opacity-50">
                <svg width="404" height="384" fill="none" viewBox="0 0 404 384">
                    <defs>
                        <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="2" className="text-indigo-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="384" fill="url(#pattern-circles)" />
                </svg>
            </div>
        </>
    )
}

export default BackgroundDeco