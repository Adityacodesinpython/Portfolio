import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='p-2 sm:p-10  xl:p-20 '>
        <h2 className='text-white font-bold pl-10 text-3xl sm:text-5xl mb-5'>Skills</h2>
        <ul className='projects-container grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 grid-rows-2 p-10'>
            <li className='project-card py-4 text-white  justify-center flex flex-col items-center gap-2 font-bold text-lg sm:text-2xl hover:bg-cyan-700 hover:scale-110 transition delay-120 rounded-md'>
            React<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,255.98958,255.98958" className='w-14 h-14 sm:w-24 sm:h-24'>
                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(6.4,6.4)"><path d="M20,28.9c-11.402,0 -20,-3.73 -20,-8.9c0,-5.17 8.598,-9 20,-9c11.402,0 20,3.83 20,9c0,5.17 -8.598,8.9 -20,8.9zM20,13.932c-9.729,0 -17.125,3.266 -17.125,6.131c0,2.865 7.396,6.005 17.125,6.005c9.729,0 17.125,-3.266 17.125,-6.131c0,-2.865 -7.396,-6.005 -17.125,-6.005z" fill-opacity="0" fill="#632323"></path><path d="M12.402,38c-0.001,0 0,0 0,0c-0.931,0 -1.781,-0.216 -2.528,-0.642c-1.22,-0.697 -2.095,-1.928 -2.532,-3.562c-1.146,-4.282 0.703,-11.482 4.713,-18.344c4.705,-8.045 10.952,-13.449 15.544,-13.449c0.93,0 1.78,0.216 2.527,0.642c1.218,0.695 2.094,1.925 2.531,3.558c1.147,4.282 -0.703,11.483 -4.715,18.345c-4.701,8.046 -10.947,13.452 -15.54,13.452zM27.599,5.003c-2.888,0 -8.409,4.193 -12.954,11.963c-4.123,7.056 -5.332,12.909 -4.404,16.054c0.251,0.849 0.605,1.438 1.121,1.732c2.361,1.348 8.809,-2.85 13.991,-11.717c4.125,-7.057 5.46,-12.785 4.406,-16.055c-0.271,-0.841 -0.604,-1.435 -1.119,-1.728c-0.293,-0.168 -0.634,-0.249 -1.041,-0.249z" fill-opacity="0" fill="#632323"></path><path d="M27.599,37.997v0c-4.597,-0.001 -10.843,-5.405 -15.544,-13.449c-4.01,-6.862 -5.859,-14.063 -4.713,-18.344c0.437,-1.634 1.312,-2.865 2.531,-3.561c0.748,-0.427 1.598,-0.643 2.527,-0.643c4.595,0 10.84,5.406 15.542,13.452c4.011,6.861 5.86,14.062 4.714,18.345c-0.438,1.633 -1.313,2.863 -2.53,3.558c-0.747,0.426 -1.598,0.642 -2.527,0.642zM12.4,5c-0.407,0 -0.747,0.082 -1.04,0.248c-0.515,0.294 -0.874,0.881 -1.12,1.732c-0.928,3.208 0.281,8.999 4.404,16.055c4.541,7.769 10.063,11.962 12.954,11.962v0c0.408,0 0.748,-0.082 1.041,-0.249c0.514,-0.292 0.883,-0.876 1.118,-1.728c0.867,-3.146 -0.281,-9 -4.405,-16.055c-4.541,-7.771 -10.062,-11.965 -12.952,-11.965z" fill-opacity="0" fill="#632323"></path><path d="M23.5,20c0,1.935 -1.565,3.5 -3.5,3.5c-1.935,0 -3.5,-1.565 -3.5,-3.5c0,-1.935 1.565,-3.5 3.5,-3.5c1.935,0 3.5,1.565 3.5,3.5z" fill="#ffffff"></path><path d="M20,24c-2.206,0 -4,-1.794 -4,-4c0,-2.206 1.794,-4 4,-4c2.206,0 4,1.794 4,4c0,2.206 -1.794,4 -4,4zM20,17c-1.654,0 -3,1.346 -3,3c0,1.654 1.346,3 3,3c1.654,0 3,-1.346 3,-3c0,-1.654 -1.346,-3 -3,-3z" fill-opacity="0" fill="#632323"></path><path d="M20,28.068c-10.654,0 -19,-3.544 -19,-8.068c0,-4.524 8.346,-8.068 19,-8.068c10.654,0 19,3.544 19,8.068c0,4.524 -8.346,8.068 -19,8.068zM20,12.932c-9.757,0 -18,3.237 -18,7.068c0,3.831 8.243,7.068 18,7.068c9.757,0 18,-3.236 18,-7.068c0,-3.832 -8.243,-7.068 -18,-7.068z" fill="#ffffff"></path><path d="M12.402,37c-0.001,0 0,0 0,0c-0.755,0 -1.438,-0.172 -2.033,-0.511c-0.996,-0.569 -1.689,-1.562 -2.062,-2.952c-1.081,-4.037 0.729,-10.938 4.61,-17.581c4.462,-7.626 10.499,-12.953 14.682,-12.953c0.754,0 1.438,0.172 2.032,0.511c0.995,0.568 1.688,1.56 2.061,2.948c1.081,4.037 -0.729,10.938 -4.612,17.582c-4.459,7.628 -10.494,12.956 -14.678,12.956zM27.599,4.003c-3.784,0 -9.595,5.239 -13.817,12.458c-3.695,6.325 -5.507,13.083 -4.508,16.818c0.301,1.123 0.836,1.91 1.592,2.342c0.441,0.251 0.957,0.379 1.535,0.379c3.785,0 9.595,-5.24 13.814,-12.461c3.697,-6.326 5.51,-13.085 4.509,-16.818c-0.3,-1.121 -0.835,-1.908 -1.59,-2.338c-0.441,-0.252 -0.957,-0.38 -1.535,-0.38z" fill="#ffffff"></path><g fill="#ffffff"><path d="M27.599,36.997v0c-4.187,-0.001 -10.224,-5.327 -14.681,-12.953c-3.882,-6.643 -5.691,-13.544 -4.61,-17.581c0.372,-1.39 1.065,-2.383 2.062,-2.952c0.594,-0.339 1.277,-0.511 2.03,-0.511c4.185,0 10.221,5.328 14.679,12.956c3.883,6.642 5.692,13.543 4.61,17.582c-0.371,1.389 -1.064,2.381 -2.059,2.948c-0.594,0.339 -1.277,0.511 -2.031,0.511zM12.4,4c-0.577,0 -1.094,0.128 -1.535,0.379c-0.756,0.432 -1.291,1.219 -1.592,2.342c-0.999,3.734 0.813,10.493 4.508,16.818c4.219,7.218 10.031,12.457 13.818,12.458v0c0.578,0 1.095,-0.128 1.536,-0.38c0.754,-0.43 1.289,-1.217 1.589,-2.338c1,-3.735 -0.812,-10.494 -4.508,-16.818c-4.22,-7.22 -10.029,-12.461 -13.816,-12.461z"></path></g></g></g>
                    </svg>
            </li>
            <li className='project-card py-4 text-white  justify-center flex flex-col items-center gap-2 font-bold text-lg sm:text-2xl  hover:bg-cyan-700 hover:scale-110 transition delay-120 rounded-md'>
            Javascript<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-14 h-14 sm:w-24 sm:h-24' viewBox="0,0,255.98958,255.98958">
<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M6.66797,4c-1.46094,0 -2.66797,1.20703 -2.66797,2.66797v36.66406c0,1.46094 1.20703,2.66797 2.66797,2.66797h36.66406c1.46094,0 2.66797,-1.20312 2.66797,-2.66797v-36.66406c0,-1.46094 -1.20312,-2.66797 -2.66797,-2.66797zM6.66797,6h36.66406c0.37109,0 0.66797,0.29688 0.66797,0.66797v36.66406c0,0.37109 -0.29687,0.66797 -0.66797,0.66797h-36.66406c-0.37109,0 -0.66797,-0.29687 -0.66797,-0.66797v-36.66406c0,-0.37109 0.29688,-0.66797 0.66797,-0.66797zM23,23v12.57422c0,1.92969 -0.73047,2.42578 -2,2.42578c-1.32812,0 -2.25,-0.82812 -2.85937,-1.90234l-3.14062,1.90234c0.91016,1.92578 3.14063,4 6.23438,4c3.42188,0 5.76563,-1.82031 5.76563,-5.81641v-13.18359zM35.45313,23c-3.40625,0 -5.58984,2.17969 -5.58984,5.04297c0,3.10547 1.83203,4.57422 4.58594,5.74609l0.95313,0.41016c1.73828,0.76172 2.59766,1.22656 2.59766,2.53516c0,1.08984 -0.82812,1.87891 -2.41016,1.87891c-1.88281,0 -2.77344,-1.27734 -3.58984,-2.61328l-3,2c1.12109,2.21484 3.13281,4 6.67578,4c3.625,0 6.32422,-1.88281 6.32422,-5.31641c0,-3.1875 -1.82812,-4.60547 -5.07422,-5.99609l-0.95312,-0.40625c-1.63672,-0.71094 -2.34766,-1.17187 -2.34766,-2.31641c0,-0.92578 0.71094,-1.63672 1.82813,-1.63672c1.09766,0 1.80078,0.46484 2.45313,1.63672l2.97266,-1.90625c-1.25391,-2.21484 -3,-3.05859 -5.42578,-3.05859z"></path></g></g>
</svg>
            </li>
            <li className='project-card py-4 text-white  justify-center flex flex-col items-center  font-bold text-lg sm:text-2xl  hover:bg-cyan-700 hover:scale-110 transition delay-120 rounded-md'>
            Nodejs<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-14 h-14 sm:w-24 sm:h-24' viewBox="0,0,255.98958,255.98958">
<g transform="translate(24.31901,24.31901) scale(0.81,0.81)"><g fill-opacity="0" fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M-30.02347,286.01305v-316.03652h316.03652v316.03652z" id="bgRectangle"></path></g><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.33333,5.33333)"><path d="M17.204,19.122l-4.907,2.715c-0.184,0.101 -0.297,0.289 -0.297,0.492v5.433c0,0.203 0.113,0.39 0.297,0.492l4.908,2.717c0.183,0.101 0.41,0.101 0.593,0l4.907,-2.717c0.182,-0.102 0.295,-0.289 0.295,-0.492v-5.433c0,-0.203 -0.113,-0.39 -0.297,-0.492l-4.906,-2.715c-0.092,-0.051 -0.195,-0.076 -0.297,-0.076c-0.103,0 -0.205,0.025 -0.297,0.076M42.451,24.013l-0.818,0.452c-0.031,0.017 -0.049,0.048 -0.049,0.082v0.906c0,0.034 0.019,0.065 0.049,0.082l0.818,0.453c0.031,0.017 0.068,0.017 0.099,0l0.818,-0.453c0.03,-0.017 0.049,-0.048 0.049,-0.082v-0.906c0,-0.034 -0.019,-0.065 -0.05,-0.082l-0.818,-0.452c-0.015,-0.009 -0.032,-0.013 -0.049,-0.013c-0.017,0 -0.034,0.004 -0.049,0.013"></path><path d="M35.751,13.364l-2.389,-1.333c-0.075,-0.042 -0.167,-0.041 -0.241,0.003c-0.074,0.044 -0.12,0.123 -0.12,0.209l-0.001,8.052l-2.203,-1.219c-0.092,-0.051 -0.195,-0.076 -0.297,-0.076c-0.102,0 -0.205,0.025 -0.297,0.076h0.001l-4.907,2.715c-0.184,0.101 -0.297,0.289 -0.297,0.491v5.433c0,0.203 0.113,0.39 0.297,0.492l4.908,2.717c0.183,0.101 0.41,0.101 0.593,0l4.907,-2.717c0.182,-0.101 0.295,-0.289 0.295,-0.492v-13.927c0,-0.176 -0.096,-0.338 -0.249,-0.424zM32.866,26.458l-2.23,1.235c-0.083,0.046 -0.186,0.046 -0.269,0l-2.231,-1.235c-0.085,-0.046 -0.136,-0.132 -0.136,-0.224v-2.47c0,-0.092 0.051,-0.177 0.135,-0.224l2.231,-1.234h-0.001c0.042,-0.023 0.088,-0.034 0.135,-0.034c0.047,0 0.093,0.012 0.135,0.034l2.23,1.234c0.084,0.047 0.135,0.133 0.135,0.225v2.47c0,0.091 -0.051,0.177 -0.134,0.223z"></path><path d="M17.204,19.122l-5.204,8.64c0,0.203 0.113,0.39 0.297,0.492l4.908,2.717c0.183,0.101 0.41,0.101 0.593,0l5.202,-8.642c0,-0.203 -0.113,-0.39 -0.297,-0.492l-4.906,-2.715c-0.092,-0.051 -0.195,-0.076 -0.297,-0.076c-0.103,0 -0.205,0.025 -0.297,0.076"></path><path d="M17.204,19.122l-4.907,2.715c-0.184,0.101 -0.297,0.289 -0.297,0.492l5.204,8.642c0.183,0.101 0.41,0.101 0.593,0l4.907,-2.717c0.183,-0.102 0.296,-0.289 0.296,-0.492l-5.203,-8.64c-0.092,-0.051 -0.195,-0.076 -0.297,-0.076c-0.103,0 -0.205,0.025 -0.297,0.076"></path><path d="M47.703,21.791l-4.906,-2.715c-0.092,-0.051 -0.195,-0.076 -0.297,-0.076c-0.102,0 -0.205,0.025 -0.297,0.076h0.001l-4.907,2.715c-0.183,0.101 -0.297,0.293 -0.297,0.503v5.411c0,0.209 0.114,0.402 0.297,0.503l4.908,2.717c0.184,0.102 0.409,0.102 0.593,0l2.263,-1.253c0.207,-0.115 0.206,-0.412 -0.002,-0.526l-4.924,-2.687c-0.083,-0.047 -0.135,-0.134 -0.135,-0.228v-2.466c0,-0.092 0.05,-0.177 0.13,-0.221l2.235,-1.236h-0.001c0.042,-0.023 0.088,-0.034 0.135,-0.034c0.047,0 0.093,0.012 0.135,0.034l2.235,1.237c0.08,0.044 0.13,0.129 0.13,0.221v2.012c0,0.086 0.046,0.166 0.121,0.209c0.075,0.042 0.167,0.042 0.242,-0.001l2.398,-1.393c0.148,-0.086 0.24,-0.245 0.24,-0.417v-1.88c0,-0.211 -0.114,-0.404 -0.297,-0.505zM10.703,21.791l-4.906,-2.715c-0.092,-0.051 -0.195,-0.076 -0.297,-0.076c-0.102,0 -0.205,0.025 -0.297,0.076h0.001l-4.907,2.715c-0.183,0.101 -0.297,0.293 -0.297,0.503v7.465c0,0.086 0.046,0.166 0.121,0.209c0.075,0.042 0.167,0.042 0.242,-0.001l2.398,-1.393c0.148,-0.086 0.239,-0.245 0.239,-0.417v-4.393c0,-0.092 0.05,-0.177 0.13,-0.221l2.235,-1.236v0c0.042,-0.023 0.088,-0.034 0.135,-0.034c0.047,0 0.093,0.012 0.135,0.034l2.235,1.237c0.08,0.044 0.13,0.129 0.13,0.221v4.393c0,0.172 0.091,0.331 0.24,0.417l2.398,1.393c0.075,0.043 0.167,0.043 0.242,0.001c0.074,-0.044 0.12,-0.124 0.12,-0.21v-7.464c0,-0.21 -0.114,-0.403 -0.297,-0.504z"></path></g></g></g>
</svg>
            </li>
            <li className='project-card py-4 text-white  justify-center flex flex-col items-center gap-2 font-bold text-lg sm:text-2xl  hover:bg-cyan-700 hover:scale-110 transition delay-120 rounded-md'>
            Git<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-14 h-14 sm:w-24 sm:h-24' viewBox="0,0,255.98958,255.98958">
<g fill-opacity="0" fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><path d="M0,255.98958v-255.98958h255.98958v255.98958z" id="bgRectangle"></path></g><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M46.79297,22.08984l-18.88281,-18.88281c-0.80078,-0.80469 -1.85547,-1.20703 -2.91016,-1.20703c-1.05469,0 -2.10937,0.40234 -2.91016,1.20703l-3.73437,3.73437l4.62109,4.62109c1.53516,-0.90234 3.53516,-0.70703 4.85156,0.60938c1.31641,1.31641 1.50781,3.31641 0.60547,4.84766l4.54297,4.54297c1.53516,-0.90234 3.53516,-0.70703 4.85156,0.60938c1.5625,1.5625 1.5625,4.09375 0,5.65625c-1.5625,1.5625 -4.09375,1.5625 -5.65625,0c-1.31641,-1.31641 -1.51172,-3.31641 -0.60937,-4.85156l-4.54297,-4.54297c-0.32422,0.19141 -0.66406,0.33203 -1.01953,0.42188v12.28516c1.72266,0.44531 3,1.99609 3,3.85938c0,2.21094 -1.78906,4 -4,4c-2.21094,0 -4,-1.78906 -4,-4c0,-1.86328 1.27734,-3.41406 3,-3.85937v-12.28516c-0.66797,-0.17187 -1.30469,-0.50391 -1.82812,-1.02734c-1.31641,-1.31641 -1.50781,-3.31641 -0.60547,-4.84766l-4.625,-4.625l-13.73437,13.73438c-1.60938,1.60547 -1.60938,4.21484 0,5.82031l18.88281,18.88281c0.80078,0.80469 1.85547,1.20703 2.91016,1.20703c1.05469,0 2.10938,-0.40234 2.91016,-1.20703l18.88281,-18.88281c1.60938,-1.60547 1.60938,-4.21484 0,-5.82031z"></path></g></g>
</svg>
            </li>
            <li className='project-card py-4 text-white  justify-center flex flex-col items-center gap-4 font-bold text-lg sm:text-2xl  hover:bg-cyan-700 hover:scale-110 transition delay-120 rounded-md'>
            HTML<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-14 h-14 sm:w-24 sm:h-24' viewBox="0,0,255.98958,255.98958">
<g fill-opacity="0" fill="#8c6868" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M0,255.98958v-255.98958h255.98958v255.98958z" id="bgRectangle"></path></g><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M45.27344,2.32422c-0.1875,-0.20703 -0.45703,-0.32422 -0.73828,-0.32422h-39.07031c-0.28125,0 -0.55078,0.11719 -0.73828,0.32422c-0.19141,0.20703 -0.28516,0.48438 -0.25781,0.76563l3.51953,39.42578c0.03516,0.41406 0.32422,0.75781 0.72266,0.875l16.01172,4.57031c0.08594,0.02734 0.17969,0.03906 0.27344,0.03906c0.09375,0 0.18359,-0.01172 0.27344,-0.03906l16.02344,-4.57031c0.39844,-0.11719 0.68359,-0.46094 0.72266,-0.875l3.51563,-39.42578c0.02734,-0.28125 -0.06641,-0.55859 -0.25781,-0.76562zM36.84766,15.91797h-18.8125l0.44922,5.08984h17.91016l-1.34375,15.04297l-10.05859,3.03906l-0.09766,-0.03125l-9.94141,-3.01172l-0.54297,-6.12891h4.87109l0.21094,2.37891l5.55859,1.16406l5.45703,-1.16406l0.58203,-6.4375h-17.04297l-1.32422,-14.80469h24.55859z"></path></g></g>
</svg>
            </li>
            <li className='project-card py-4 text-white  justify-center flex flex-col items-center gap-2 font-bold text-lg sm:text-2xl  hover:bg-cyan-700 hover:scale-110 transition delay-120 rounded-md'>
            CSS<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-14 h-14 sm:w-24 sm:h-24' viewBox="0,0,255.98958,255.98958">
<g fill-opacity="0" fill="#ef2020" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><path d="M0,255.98958v-255.98958h255.98958v255.98958z" id="bgRectangle"></path></g><g fill="#ffffff" fill-rule="evenodd" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M42,6l-3,34l-14,4l-14,-4l-3,-34zM16.80078,28h4l0.09766,2.5l4.10156,1.39844l4.10156,-1.39844l0.29688,-4.5h-8.79687l-0.20312,-4h9.20313l0.29688,-4h-13.79687l-0.30078,-4h18.30078l-0.5,8l-0.70312,11.5l-7.89844,2.60156l-7.89844,-2.60156z"></path></g></g>
</svg>
            </li>
            <li className='project-card py-4 text-white  justify-center flex flex-col items-center gap-2 font-bold text-lg sm:text-2xl  hover:bg-cyan-700 hover:scale-110 transition delay-120 rounded-md'>
            Tailwind<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-14 h-14 sm:w-24 sm:h-24' viewBox="0,0,255.98958,255.98958">
<g fill-opacity="0" fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><path d="M0,255.98958v-255.98958h255.98958v255.98958z" id="bgRectangle"></path></g><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(10.66667,10.66667)"><path d="M22.105,7.553c-0.224,0.448 -0.523,0.723 -0.914,0.838c-0.614,0.183 -1.343,-0.052 -1.685,-0.253c-0.451,-0.265 -0.974,-0.667 -1.527,-1.092c-1.765,-1.358 -3.961,-3.046 -6.979,-3.046c-2.414,0 -3.654,1.239 -5.707,3.293l1.407,1.421c0.546,-0.425 4.031,-0.015 5.552,1.194c2.259,1.795 3.89,3.092 5.748,3.092c2.659,0 4.879,-1.741 5.94,-4.658zM16.192,15.391c-0.613,0.18 -1.343,-0.052 -1.685,-0.253c-0.451,-0.265 -0.974,-0.667 -1.527,-1.092c-1.766,-1.358 -3.962,-3.046 -6.98,-3.046c-2.414,0 -3.654,1.239 -5.707,3.293l1.407,1.421c0.545,-0.427 4.032,-0.014 5.552,1.194c2.259,1.795 3.89,3.092 5.748,3.092c2.659,0 4.879,-1.741 5.94,-4.658l-1.834,-0.789c-0.225,0.448 -0.523,0.722 -0.914,0.838z"></path></g></g>
</svg>
            </li>
            <li className='project-card py-4 text-white  justify-center flex flex-col items-center gap-2 font-bold text-lg sm:text-2xl  hover:bg-cyan-700 hover:scale-110 transition delay-120 rounded-md'>
            Mongodb<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-14 h-14 sm:w-24 sm:h-24' viewBox="0,0,255.98958,255.98958">
<g fill-opacity="0" fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M0,255.98958v-255.98958h255.98958v255.98958z" id="bgRectangle"></path></g><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.33333,5.33333)"><path d="M42,17.3c0,20.5 -18,26.7 -18,26.7c0,0 -18,-6.2 -18,-26.7c0,-2.5 0.2,-4.6 0.4,-6.3c0.3,-2.5 2,-4.5 4.4,-5.1c3.1,-0.9 8,-1.9 13.2,-1.9c5.2,0 10.1,1 13.3,1.9c2.4,0.6 4.1,2.7 4.4,5.1c0.1,1.7 0.3,3.9 0.3,6.3z" fill-opacity="0" fill="#00ff0c"></path><path d="M24,7c4.9,0 9.5,1 12.5,1.8c1.2,0.3 2,1.3 2.2,2.6c0.2,1.9 0.3,3.9 0.3,5.9c0,15.6 -11.5,21.9 -15,23.4c-3.5,-1.6 -15,-7.9 -15,-23.4c0,-2 0.1,-4 0.3,-5.9c0.1,-1.3 1,-2.3 2.2,-2.6c3,-0.8 7.6,-1.8 12.5,-1.8M24,4c-5.2,0 -10.1,1 -13.3,1.9c-2.3,0.6 -4.1,2.7 -4.3,5.1c-0.2,1.7 -0.4,3.9 -0.4,6.3c0,20.5 18,26.7 18,26.7c0,0 18,-6.2 18,-26.7c0,-2.5 -0.2,-4.6 -0.4,-6.3c-0.3,-2.5 -2,-4.5 -4.4,-5.1c-3.1,-0.9 -8,-1.9 -13.2,-1.9z" fill="#ffffff"></path><path d="M23,28h2v8h-2z" fill="#ffffff"></path><path d="M24,10c0,0 -6,5 -6,13c0,5.2 3.3,8.5 5,10l1,-3l1,3c1.7,-1.5 5,-4.8 5,-10c0,-8 -6,-13 -6,-13z" fill="#ffffff"></path><path d="M24,10c0,0 -6,5 -6,13c0,5.2 3.3,8.5 5,10l1,-3z" fill="#ffffff"></path></g></g>
</svg>
            </li>
            <li className='project-card py-4 text-white  justify-center flex flex-col items-center gap-2 font-bold text-lg sm:text-2xl  hover:bg-cyan-700 hover:scale-110 transition delay-120 rounded-md'>
            Expressjs<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-14 h-14 sm:w-24 sm:h-24' viewBox="0,0,255.98958,255.98958">
<g fill-opacity="0" fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><path d="M0,255.98958v-255.98958h255.98958v255.98958z" id="bgRectangle"></path></g><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(8.53333,8.53333)"><path d="M9.67773,1.51563c-0.18487,0.00425 -0.3523,0.11017 -0.43532,0.2754c-0.08302,0.16523 -0.06809,0.36279 0.03884,0.51366l1.47852,2.13672c-1.4196,1.08789 -2.41389,2.70401 -2.67969,4.55859h13.83984c-0.2658,-1.85459 -1.26009,-3.4707 -2.67969,-4.55859l1.47852,-2.13672c0.10848,-0.15316 0.12207,-0.35416 0.03518,-0.52052c-0.08689,-0.16636 -0.25961,-0.27006 -0.44729,-0.26854c-0.16473,0.00152 -0.31814,0.08407 -0.41016,0.2207l-1.49023,2.15625c-1.008,-0.56485 -2.16746,-0.89258 -3.40625,-0.89258c-1.23879,0 -2.39825,0.32773 -3.40625,0.89258l-1.49023,-2.15625c-0.09509,-0.14127 -0.25553,-0.22443 -0.42578,-0.2207zM12,5c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM18,5c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM5,11c-0.552,0 -1,0.448 -1,1v8c0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1v-8c0,-0.552 -0.448,-1 -1,-1zM8,11v10c0,1.105 0.895,2 2,2v3.5c0,0.828 0.672,1.5 1.5,1.5c0.828,0 1.5,-0.672 1.5,-1.5v-3.5h4v3.5c0,0.828 0.672,1.5 1.5,1.5c0.828,0 1.5,-0.672 1.5,-1.5v-3.5c1.105,0 2,-0.895 2,-2v-10zM25,11c-0.552,0 -1,0.448 -1,1v8c0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1v-8c0,-0.552 -0.448,-1 -1,-1z"></path></g></g>
</svg>
            </li>
            <li className='project-card py-4 text-white  justify-center flex flex-col items-center gap-2 font-bold text-md sm:text-2xl  hover:bg-cyan-700 hover:scale-110 transition delay-120 rounded-md'>
            Material UI<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-14 h-14 sm:w-24 sm:h-24' viewBox="0,0,255.98958,255.98958">
<g fill-opacity="0" fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><path d="M0,255.98958v-255.98958h255.98958v255.98958z" id="bgRectangle"></path></g><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.33333,5.33333)"><path d="M1,5l6,4v20l-6,-4z"></path><path d="M47,20l-6,4v13l6,-4z"></path><path d="M47,6l-6,4v7l6,-4z"></path><path d="M35,5l-6,4v20l6,-4z"></path><path d="M1,12l17,11v-7l-17,-11z"></path><path d="M35,12l-17,11v-7l17,-11z"></path><path d="M35,26l-17,11v-7l17,-11z"></path><path d="M47,34l-17,11v-7l17,-11z"></path><path d="M30,37.765l-12,-7.765v7l12,7.765z"></path></g></g>
</svg>
            </li>
        </ul>
    </div>
  )
}

export default Projects