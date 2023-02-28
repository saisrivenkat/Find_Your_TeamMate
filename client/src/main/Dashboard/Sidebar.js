import React from 'react';
import homesvg from '../../images/home.svg';
const Sidebar=()=>{
    return(
        <div className='sidebar'>
            <div className='sidebar_content'>
                <div className="home">
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24"><path d="M23.611 8.70837L12.611 0.208369C12.436 0.0732763 12.2211 0 12 0C11.7789 0 11.564 0.0732763 11.389 0.208369L0.389 8.70837C0.268036 8.80173 0.170076 8.92158 0.102642 9.0587C0.0352093 9.19582 9.63811e-05 9.34657 0 9.49937L0 22.9994C0 23.2646 0.105357 23.5189 0.292893 23.7065C0.48043 23.894 0.734784 23.9994 1 23.9994H23C23.2652 23.9994 23.5196 23.894 23.7071 23.7065C23.8946 23.5189 24 23.2646 24 22.9994V9.49937C23.9999 9.34657 23.9648 9.19582 23.8974 9.0587C23.8299 8.92158 23.732 8.80173 23.611 8.70837V8.70837ZM22 21.4994C22 21.632 21.9473 21.7592 21.8536 21.8529C21.7598 21.9467 21.6326 21.9994 21.5 21.9994H2.5C2.36739 21.9994 2.24021 21.9467 2.14645 21.8529C2.05268 21.7592 2 21.632 2 21.4994V10.2364C1.9993 10.1593 2.01644 10.083 2.0501 10.0136C2.08375 9.94423 2.133 9.88357 2.194 9.83637L11.694 2.49537C11.7816 2.42758 11.8892 2.3908 12 2.3908C12.1108 2.3908 12.2184 2.42758 12.306 2.49537L21.806 9.83637C21.867 9.88357 21.9162 9.94423 21.9499 10.0136C21.9836 10.083 22.0007 10.1593 22 10.2364V21.4994Z" fill="currentColor"></path></svg>
                </div>
                <div className="profile">
                <svg fill="none" height="26" viewBox="0 0 24 26" width="24"><path d="M23 25v-3.106a1.976 1.976 0 00-.77-1.579C20.9 19.3 17.73 17.5 12 17.5s-8.895 1.8-10.23 2.815A1.976 1.976 0 001 21.894V25M18 7A6 6 0 106 7v2a6 6 0 1012 0V7z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M18 6.981A5.566 5.566 0 0114 5c-1.942 2.337-4.673 2-6 2H6M8.083 17.813a4 4 0 007.834 0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                </div>
                <div className='projects'>
                    <img src='https://img.icons8.com/wired/2x/group-of-projects.png' />
                </div>

            </div>
        </div>
    )
}
export default Sidebar