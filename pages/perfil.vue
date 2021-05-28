<template>
  <main :as="PageOn()">
    <!-- User  -->
    <div class="User_fotos" :style="{ background: Color_238 }" />
    <div class="Foto_perfil">
      <svg
        v-if="infoUser.genre === 'male'"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 236.04 338.5"
      >
        <defs>
          <clipPath id="clip-path">
            <rect
              x="51.51"
              y="0.8"
              width="137"
              height="190"
              style="fill: none"
            />
          </clipPath>
          <linearGradient
            id="Gradiente_sem_nome_2"
            x1="73.1"
            y1="-146.9"
            x2="97.1"
            y2="-196.19"
            gradientTransform="matrix(1, 0, 0, -1, 0.04, -44.4)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#fff" />
            <stop offset="1" stop-color="#c1c5e5" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="Gradiente_sem_nome_2-2"
            x1="144.67"
            y1="-146.9"
            x2="168.67"
            y2="-196.19"
            xlink:href="#Gradiente_sem_nome_2"
          />
        </defs>
        <g id="Camada_2" data-name="Camada 2">
          <g id="Camada_1-2" data-name="Camada 1">
            <rect
              x="84.51"
              y="134"
              width="68.21"
              height="128.13"
              rx="13.78"
              style="
                fill: #ca9e67;
                stroke: #333233;
                stroke-linecap: round;
                stroke-width: 4px;
              "
            />
            <path
              d="M86.41,216.63V175.68H155C149.85,196.68,119,217.77,86.41,216.63Z"
              style="fill: #a58255"
            />
            <path
              d="M78.51,130.3c0,11.69-10.55,21.5-24,21.5s-24-9.81-24-21.5,10.55-21.5,24-21.5S78.51,118.61,78.51,130.3Z"
              style="
                fill: #ca9e67;
                stroke: #333233;
                stroke-linecap: round;
                stroke-width: 4px;
              "
            />
            <path
              d="M161.51,130.3c0,11.69,10.55,21.5,24,21.5s24-9.81,24-21.5-10.55-21.5-24-21.5S161.51,118.61,161.51,130.3Z"
              style="
                fill: #ca9e67;
                stroke: #333233;
                stroke-linecap: round;
                stroke-width: 4px;
              "
            />
            <g style="clip-path: url(#clip-path)">
              <path
                d="M186.51,126.13c0,20.34-5.92,35.84-16.94,46.27s-27.47,16.07-49,16.07S82.28,182.84,71,172.38s-17.46-25.94-17.46-46.25,6.21-41.61,17.73-57.71,28.19-26.94,49.3-26.94S158.07,52.34,169.3,68.4,186.51,105.75,186.51,126.13Z"
                style="
                  fill: #ca9e67;
                  stroke: #333233;
                  stroke-linecap: round;
                  stroke-width: 4px;
                "
              />
              <path
                d="M120.35,124.47c-1.86,8.39-2.84,12.78-2.84,21.5,2.5,1.56,4.89,1.95,9,1.9"
                style="
                  fill: none;
                  stroke: #333233;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-width: 4px;
                "
              />
              <path
                d="M85.28,131.55a6.56,6.56,0,0,0,5.19-2.85,11.77,11.77,0,0,0,0-13.36,6.16,6.16,0,0,0-10.38,0,11.77,11.77,0,0,0,0,13.36A6.56,6.56,0,0,0,85.28,131.55Z"
                style="fill: #333233; stroke: #333233; stroke-linecap: round"
              />
              <circle
                cx="88.13"
                cy="119.81"
                r="2.5"
                style="fill: #fff; stroke: #333233"
              />
              <path
                d="M157.28,131.55a6.56,6.56,0,0,0,5.19-2.85,11.77,11.77,0,0,0,0-13.36,6.16,6.16,0,0,0-10.38,0,11.77,11.77,0,0,0,0,13.36A6.56,6.56,0,0,0,157.28,131.55Z"
                style="fill: #333233; stroke: #333233; stroke-linecap: round"
              />
              <circle cx="160.13" cy="119.81" r="2" style="fill: #fff" />
              <path
                d="M111.51,159.47c3,3.67,10.8,8.8,18,0"
                style="
                  fill: none;
                  stroke: #333233;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-width: 4px;
                "
              />
              <ellipse
                cx="83.01"
                cy="156.5"
                rx="9.5"
                ry="5.5"
                style="fill: #f49b81"
              />
              <ellipse
                cx="162.01"
                cy="156.5"
                rx="9.5"
                ry="5.5"
                style="fill: #f49b81"
              />
            </g>
            <path
              d="M40,68.8c-1.64-22.08,4.5-33.5,23-38,0,0,55-54.5,103.5-18.5S185,109.5,185,109.5c-11.5-15.5-16.53-18.61-15.5-38.2-41.84,12.57-59.28,8.85-82.5-17C84,71,80.51,77,68.51,84c2.15,12.31-10.5,23-14,26.5C43.35,98.26,41.24,89.3,40,68.8Z"
              style="fill: #333233"
            />
            <path
              d="M85.15,226.57c16.14,28,55.24,25.78,67.43.25a1.24,1.24,0,0,1,1.56-.68c27,12.22,44.66,25.21,56.75,42.18s18.72,38.16,23.13,67a1,1,0,0,1-1,1.14H3a1,1,0,0,1-1-1.15c4.77-30.31,12.6-51.74,25.43-68.5S58.26,237.8,83.69,226A1.17,1.17,0,0,1,85.15,226.57Z"
              style="
                fill: #009640;
                stroke: #333233;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 4px;
              "
            />
            <path
              d="M55.51,243.74a175.24,175.24,0,0,1,20-11.57V284h89V233.31a160.34,160.34,0,0,1,20,12V284a8,8,0,0,1,8,8v42.5h-148V292a8,8,0,0,1,8-8h3Z"
              style="fill: #432918; fill-rule: evenodd"
            />
            <path
              d="M184.51,334.5V299a8,8,0,0,0-8-8h-116a8,8,0,0,0-8,8v35.5"
              style="
                fill: none;
                stroke: #fff;
                stroke-linecap: round;
                stroke-width: 0.5px;
                stroke-dasharray: 4, 4;
              "
            />
            <line
              x1="178.01"
              y1="283.5"
              x2="178.01"
              y2="243.5"
              style="
                fill: none;
                stroke: #fff;
                stroke-linecap: round;
                stroke-dasharray: 4, 4;
              "
            />
            <circle cx="62.51" cy="290" r="6" style="fill: #fff" />
            <circle cx="176.51" cy="290" r="6" style="fill: #fff" />
            <path
              d="M80.51,316a11,11,0,0,1,11-11h53a11,11,0,0,1,11,11v19h-75Z"
              style="fill: #fff; fill-opacity: 0.5"
            />
            <path
              d="M108.12,121.61c9.28-3.71,14.32-3.8,23,0"
              style="
                fill: none;
                stroke: #333233;
                stroke-linecap: round;
                stroke-width: 4px;
              "
            />
            <path
              d="M175.56,112.44l8.56-3.81"
              style="fill: none; stroke: #333233; stroke-width: 4px"
            />
            <path
              d="M86.28,99.07l3.59,3.59-29.7,29.69-1.4-1.4c-.16-.64-.3-1.29-.41-2a24.89,24.89,0,0,1-.32-5.82L82.17,99A25.6,25.6,0,0,1,86.28,99.07Z"
              style="
                fill: #fff;
                fill-opacity: 0.15000000596046448;
                fill-rule: evenodd;
              "
            />
            <path
              d="M107.51,120.63A23.93,23.93,0,1,1,80,101.32,23.79,23.79,0,0,1,107.51,120.63Z"
              style="
                fill-opacity: 0.30000001192092896;
                stroke: #333233;
                stroke-width: 4px;
                fill: url(#Gradiente_sem_nome_2);
              "
            />
            <path
              d="M181.4,125.61a25.8,25.8,0,0,0-.34-5.31c0-.19-.07-.37-.1-.56l-2.51-2.5L147.29,148.4l.9.9a25.86,25.86,0,0,0,8.54,1Z"
              style="
                fill: #fff;
                fill-opacity: 0.15000000596046448;
                fill-rule: evenodd;
              "
            />
            <path
              d="M179.08,120.63a23.93,23.93,0,1,1-27.56-19.31A23.79,23.79,0,0,1,179.08,120.63Z"
              style="
                fill-opacity: 0.30000001192092896;
                stroke: #333233;
                stroke-width: 4px;
                fill: url(#Gradiente_sem_nome_2-2);
              "
            />
          </g>
        </g>
      </svg>
      <svg
        v-else-if="infoUser.genre === 'female'"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 276.94 374.5"
      >
        <defs>
          <linearGradient
            id="Gradiente_sem_nome_2"
            x1="82.59"
            y1="492.75"
            x2="106.59"
            y2="443.46"
            gradientTransform="matrix(1, 0, 0, -1, 0.04, 639.25)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#fff" />
            <stop offset="1" stop-color="#c1c5e5" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="Gradiente_sem_nome_2-2"
            x1="154.16"
            y1="492.75"
            x2="178.16"
            y2="443.46"
            xlink:href="#Gradiente_sem_nome_2"
          />
        </defs>
        <g id="Camada_2" data-name="Camada 2">
          <g id="Camada_1-2" data-name="Camada 1">
            <path
              d="M102.18,247.06a5,5,0,0,0,1.19-.39l32.42-15.53a5,5,0,0,1,4.73.22l20.29,12.13a5,5,0,0,0,2.15.69c20.93,1.66,29.88-1.82,39-12.85a6.13,6.13,0,0,1,6.09-1.93c4.9,1.16,13.81,2.1,21.27-3.39a19.32,19.32,0,0,0,7.57-13.22c.6-4.08,5.5-8.44,9.55-9.2s9.16-3.14,13.8-9c6.55-8.23,7.1-15.84,6.5-20.6a10.57,10.57,0,0,1,2.9-8.19c3.16-3.21,7-9.31,7.26-20.21.29-11.68-4.22-18.84-7.67-22.58a11.6,11.6,0,0,1-2.63-8.13c.21-3.29-.36-8.26-3.5-15a22.71,22.71,0,0,0-4.92-7.05c-3.3-3.07-8.12-10.9-7.32-15.33,1.42-7.89,1-18.93-7.27-30.42a44.4,44.4,0,0,0-31.86-18.84c-3.52-.38-6.9-4.05-8.14-7.37s-4-7.49-10-11.38a24.45,24.45,0,0,0-21.78-3.09,7.38,7.38,0,0,1-6-.49c-4.78-2.8-15.12-7.51-27.67-5.45-11.48,1.88-19.64,11.12-23.85,17.19a7.38,7.38,0,0,1-8.75,2.23c-5.74-2.54-15.76-5.06-29-.87-14.8,4.69-18.63,17-19.58,24.13a7.1,7.1,0,0,1-5.59,5.91A47.29,47.29,0,0,0,24.78,63.78c-10,11.07-10.1,25.72-9.38,32.93a7.74,7.74,0,0,1-3.15,6.64c-3.88,2.94-9.61,9.26-11.73,21.8-1.64,9.7.87,16.35,3.85,20.61,2.26,3.24,2.45,9.44.37,12.8A29.79,29.79,0,0,0,.52,174.63c0,7.64,3.28,12.42,6.82,15.37,3.15,2.61,5.32,9.32,5.6,13.4.24,3.48,1.9,7.9,6.61,13.09,7.17,7.9,15,7.85,20.36,6.36a9.61,9.61,0,0,1,9.86,3.58,28.62,28.62,0,0,0,9.74,9.09,21.59,21.59,0,0,0,14,2.39c3.72-.55,7.85,2.42,10.11,5.42C87,247.82,93.93,248.59,102.18,247.06Z"
              style="fill: #333233"
            />
            <rect
              x="95"
              y="176"
              width="68.21"
              height="128.13"
              rx="13.78"
              style="
                fill: #ca9e67;
                stroke: #333233;
                stroke-linecap: round;
                stroke-width: 4px;
              "
            />
            <path
              d="M96.9,258.63V217.68h68.6C160.33,238.68,129.52,259.77,96.9,258.63Z"
              style="fill: #a58255"
            />
            <path
              d="M85,173.5C85,185.19,74.45,195,61,195s-24-9.81-24-21.5S47.55,152,61,152,85,161.81,85,173.5Z"
              style="
                fill: #ca9e67;
                stroke: #333233;
                stroke-linecap: round;
                stroke-width: 4px;
              "
            />
            <path
              d="M172,173.5c0,11.69,10.55,21.5,24,21.5s24-9.81,24-21.5S209.45,152,196,152,172,161.81,172,173.5Z"
              style="
                fill: #ca9e67;
                stroke: #333233;
                stroke-linecap: round;
                stroke-width: 4px;
              "
            />
            <path
              d="M195,163.26c0,22.45-6,39.57-17,51.08S150.53,232,129,232s-38.19-6.17-49.5-17.68S62,185.69,62,163.26s6.23-45.88,17.78-63.63S108,70,129,70s37.44,11.89,48.71,29.61S195,140.79,195,163.26Z"
              style="
                fill: #ca9e67;
                stroke: #333233;
                stroke-linecap: round;
                stroke-width: 4px;
              "
            />
            <path
              d="M129,162c-2,6.81-3,10.37-3,17.46,2.64,1.26,5.16,1.58,9.5,1.54"
              style="
                fill: none;
                stroke: #333233;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 4px;
              "
            />
            <path
              d="M93.77,173.23A6.53,6.53,0,0,0,99,170.38,11.72,11.72,0,0,0,99,157a6.15,6.15,0,0,0-10.37,0,11.77,11.77,0,0,0,0,13.36A6.56,6.56,0,0,0,93.77,173.23Z"
              style="fill: #333233; stroke: #333233; stroke-linecap: round"
            />
            <circle
              cx="96.62"
              cy="161.49"
              r="2.5"
              style="fill: #fff; stroke: #333233"
            />
            <path
              d="M165.77,173.23a6.53,6.53,0,0,0,5.18-2.85A11.72,11.72,0,0,0,171,157a6.15,6.15,0,0,0-10.37,0,11.77,11.77,0,0,0,0,13.36A6.56,6.56,0,0,0,165.77,173.23Z"
              style="fill: #333233; stroke: #333233; stroke-linecap: round"
            />
            <circle cx="168.62" cy="161.49" r="2" style="fill: #fff" />
            <path
              d="M121,196.5c3,3.67,10.8,8.8,18,0"
              style="
                fill: none;
                stroke: #333233;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 4px;
              "
            />
            <ellipse
              cx="89.5"
              cy="191.5"
              rx="9.5"
              ry="5.5"
              style="fill: #f49b81"
            />
            <ellipse
              cx="168.5"
              cy="191.5"
              rx="9.5"
              ry="5.5"
              style="fill: #f49b81"
            />
            <path
              d="M148,99c-21.85,42.4-40.36,51.26-87.5,55.5-2-68,6.16-77.7,77-88.5,57.64,19.22,57.62,37.11,59,88.5C161.93,144.65,160.34,130.8,148,99Z"
              style="fill: #333233"
            />
            <path
              d="M95.64,262.57c16.14,28,55.23,25.78,67.42.25a1.24,1.24,0,0,1,1.56-.68c27,12.22,44.66,25.21,56.75,42.18s18.73,38.16,23.14,67a1,1,0,0,1-1,1.14H13.47a1,1,0,0,1-1-1.15c4.76-30.31,12.6-51.74,25.43-68.5S68.75,273.8,94.18,262A1.17,1.17,0,0,1,95.64,262.57Z"
              style="
                fill: #009640;
                stroke: #333233;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 4px;
              "
            />
            <path
              d="M66,279.74a175.24,175.24,0,0,1,20-11.57V320h89V269.31a160.34,160.34,0,0,1,20,12V320a8,8,0,0,1,8,8v42.5H55V328a8,8,0,0,1,8-8h3Z"
              style="fill: #432918; fill-rule: evenodd"
            />
            <path
              d="M195,370.5V335a8,8,0,0,0-8-8H71a8,8,0,0,0-8,8v35.5"
              style="
                fill: none;
                stroke: #fff;
                stroke-linecap: round;
                stroke-width: 0.5px;
                stroke-dasharray: 4, 4;
              "
            />
            <line
              x1="72.5"
              y1="319.5"
              x2="72.5"
              y2="279.5"
              style="
                fill: none;
                stroke: #fff;
                stroke-linecap: round;
                stroke-dasharray: 4, 4;
              "
            />
            <line
              x1="188.5"
              y1="319.5"
              x2="188.5"
              y2="279.5"
              style="
                fill: none;
                stroke: #fff;
                stroke-linecap: round;
                stroke-dasharray: 4, 4;
              "
            />
            <circle cx="73" cy="326" r="6" style="fill: #fff" />
            <circle cx="187" cy="326" r="6" style="fill: #fff" />
            <path
              d="M91,352a11,11,0,0,1,11-11h53a11,11,0,0,1,11,11v19H91Z"
              style="fill: #fff; fill-opacity: 0.5"
            />
            <path
              d="M117.61,165.61c9.28-3.71,14.32-3.8,23,0"
              style="
                fill: none;
                stroke: #333233;
                stroke-linecap: round;
                stroke-width: 4px;
              "
            />
            <path
              d="M71,160.8l-7.89-7.67"
              style="fill: none; stroke: #333233; stroke-width: 4px"
            />
            <path
              d="M185.05,156.44l8.56-3.81"
              style="fill: none; stroke: #333233; stroke-width: 4px"
            />
            <path
              d="M95.77,143.07l3.58,3.59L69.66,176.35l-1.4-1.4c-.17-.64-.3-1.29-.42-2a25.43,25.43,0,0,1-.31-5.82L91.66,143A25.6,25.6,0,0,1,95.77,143.07Z"
              style="
                fill: #fff;
                fill-opacity: 0.15000000596046448;
                fill-rule: evenodd;
              "
            />
            <path
              d="M117,164.63a23.94,23.94,0,1,1-27.56-19.31A23.79,23.79,0,0,1,117,164.63Z"
              style="
                fill-opacity: 0.30000001192092896;
                stroke: #333233;
                stroke-width: 4px;
                fill: url(#Gradiente_sem_nome_2);
              "
            />
            <path
              d="M190.89,169.61a25.18,25.18,0,0,0-.35-5.31c0-.19-.06-.37-.1-.56l-2.5-2.5L156.78,192.4l.9.9a25.83,25.83,0,0,0,8.54,1Z"
              style="
                fill: #fff;
                fill-opacity: 0.15000000596046448;
                fill-rule: evenodd;
              "
            />
            <path
              d="M188.57,164.63A23.94,23.94,0,1,1,161,145.32,23.79,23.79,0,0,1,188.57,164.63Z"
              style="
                fill-opacity: 0.30000001192092896;
                stroke: #333233;
                stroke-width: 4px;
                fill: url(#Gradiente_sem_nome_2-2);
              "
            />
          </g>
        </g>
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 323.04 373.27"
      >
        <defs>
          <linearGradient
            id="Nova_amostra_de_gradiente_1"
            x1="48.01"
            y1="315.99"
            x2="280.05"
            y2="315.99"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" />
            <stop offset="0.13" stop-color="#785018" />
            <stop offset="0.27" stop-color="#e52320" />
            <stop offset="0.43" stop-color="#f18919" />
            <stop offset="0.56" stop-color="#ffe500" />
            <stop offset="0.69" stop-color="#189f38" />
            <stop offset="0.82" stop-color="#234b9b" />
            <stop offset="1" stop-color="#8d4a96" />
          </linearGradient>
          <linearGradient
            id="Gradiente_sem_nome_2"
            x1="118.11"
            y1="-488.63"
            x2="142.11"
            y2="-537.92"
            gradientTransform="matrix(1, 0, 0, -1, 0.04, -343.36)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#fff" />
            <stop offset="1" stop-color="#c1c5e5" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="Gradiente_sem_nome_2-2"
            x1="189.68"
            y1="-488.63"
            x2="213.68"
            y2="-537.92"
            xlink:href="#Gradiente_sem_nome_2"
          />
        </defs>
        <g id="Camada_2" data-name="Camada 2">
          <g id="Camada_1-2" data-name="Camada 1">
            <path
              d="M160.85,0C200.68,0,230.6,22.6,245,57.6c30.5,7.83,55,32.67,55,64.9a67.84,67.84,0,0,1-8.95,32.84c20.31,16.64,32.66,40,32,65.54-1.34,48.58-34.66,91.08-92.63,89.49-24.68-.67-49.86-9.23-70.52-22.59C138.89,301.49,113.07,310,88,310c-56.61,0-88-43.4-88-92,0-21.11,8.66-40.49,23.1-55.65C16.75,151.65,13,139.69,13,127.5,13,95,37.86,70.07,68.66,62.43,85.64,25.4,120.54,0,160.85,0Z"
              style="fill: #333233; fill-rule: evenodd"
            />
            <rect
              x="130.52"
              y="174.77"
              width="68.21"
              height="128.13"
              rx="13.78"
              style="
                fill: #ca9e67;
                stroke: #333233;
                stroke-linecap: round;
                stroke-width: 4px;
              "
            />
            <path
              d="M132.42,257.4V216.45H201C195.85,237.45,165,258.54,132.42,257.4Z"
              style="fill: #a58255"
            />
            <path
              d="M120.52,172.27c0,11.69-10.55,21.5-24,21.5s-24-9.81-24-21.5,10.55-21.5,24-21.5S120.52,160.58,120.52,172.27Z"
              style="
                fill: #ca9e67;
                stroke: #333233;
                stroke-linecap: round;
                stroke-width: 4px;
              "
            />
            <path
              d="M207.52,172.27c0,11.69,10.55,21.5,24,21.5s24-9.81,24-21.5-10.55-21.5-24-21.5S207.52,160.58,207.52,172.27Z"
              style="
                fill: #ca9e67;
                stroke: #333233;
                stroke-linecap: round;
                stroke-width: 4px;
              "
            />
            <path
              d="M230.52,162c0,22.45-6,39.57-17,51.08s-27.46,17.66-49,17.66-38.19-6.17-49.5-17.68S97.52,184.46,97.52,162s6.23-45.88,17.78-63.63,28.23-29.63,49.25-29.63S202,80.66,213.26,98.38,230.52,139.56,230.52,162Z"
              style="
                fill: #ca9e67;
                stroke: #333233;
                stroke-linecap: round;
                stroke-width: 4px;
              "
            />
            <path
              d="M164.52,160.77c-2,6.81-3,10.37-3,17.46,2.64,1.26,5.16,1.58,9.5,1.54"
              style="
                fill: none;
                stroke: #333233;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 4px;
              "
            />
            <path
              d="M129.29,172a6.52,6.52,0,0,0,5.18-2.84,11.72,11.72,0,0,0,0-13.36,6.15,6.15,0,0,0-10.37,0,11.77,11.77,0,0,0,0,13.36A6.55,6.55,0,0,0,129.29,172Z"
              style="fill: #333233; stroke: #333233; stroke-linecap: round"
            />
            <circle
              cx="132.14"
              cy="160.26"
              r="2.5"
              style="fill: #fff; stroke: #333233"
            />
            <path
              d="M201.29,172a6.52,6.52,0,0,0,5.18-2.84,11.72,11.72,0,0,0,0-13.36,6.15,6.15,0,0,0-10.37,0,11.77,11.77,0,0,0,0,13.36A6.55,6.55,0,0,0,201.29,172Z"
              style="fill: #333233; stroke: #333233; stroke-linecap: round"
            />
            <circle cx="204.14" cy="160.26" r="2" style="fill: #fff" />
            <path
              d="M156.52,195.27c3,3.67,10.8,8.8,18,0"
              style="
                fill: none;
                stroke: #333233;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 4px;
              "
            />
            <ellipse
              cx="125.02"
              cy="190.27"
              rx="9.5"
              ry="5.5"
              style="fill: #f49b81"
            />
            <ellipse
              cx="204.02"
              cy="190.27"
              rx="9.5"
              ry="5.5"
              style="fill: #f49b81"
            />
            <path
              d="M183.52,97.77c-21.85,42.4-40.36,51.26-87.5,55.5-2-68,6.16-77.7,77-88.5,57.65,19.22,57.62,37.11,59,88.5C197.45,143.42,195.87,129.57,183.52,97.77Z"
              style="fill: #333233"
            />
            <path
              d="M131.16,261.34c16.14,28,55.24,25.78,67.43.25a1.23,1.23,0,0,1,1.55-.68c27,12.22,44.67,25.21,56.75,42.18s18.73,38.16,23.14,67a1,1,0,0,1-1,1.14H49a1,1,0,0,1-1-1.15c4.77-30.31,12.6-51.74,25.43-68.5s30.82-29.05,56.25-40.82A1.17,1.17,0,0,1,131.16,261.34Z"
              style="
                stroke: #333233;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 4px;
                fill: url(#Nova_amostra_de_gradiente_1);
              "
            />
            <path
              d="M101.52,278.51a175.24,175.24,0,0,1,20-11.57v51.83h89V268.08a160.34,160.34,0,0,1,20,12v38.7a8,8,0,0,1,8,8v42.5h-148v-42.5a8,8,0,0,1,8-8h3Z"
              style="fill: #432918; fill-rule: evenodd"
            />
            <path
              d="M230.52,369.27v-35.5a8,8,0,0,0-8-8h-116a8,8,0,0,0-8,8v35.5"
              style="
                fill: none;
                stroke: #fff;
                stroke-linecap: round;
                stroke-width: 0.5px;
                stroke-dasharray: 4, 4;
              "
            />
            <line
              x1="108.02"
              y1="318.27"
              x2="108.02"
              y2="278.27"
              style="
                fill: none;
                stroke: #fff;
                stroke-linecap: round;
                stroke-dasharray: 4, 4;
              "
            />
            <line
              x1="224.02"
              y1="318.27"
              x2="224.02"
              y2="278.27"
              style="
                fill: none;
                stroke: #fff;
                stroke-linecap: round;
                stroke-dasharray: 4, 4;
              "
            />
            <circle cx="108.52" cy="324.77" r="6" style="fill: #fff" />
            <circle cx="222.52" cy="324.77" r="6" style="fill: #fff" />
            <path
              d="M126.52,350.77a11,11,0,0,1,11-11h53a11,11,0,0,1,11,11v19h-75Z"
              style="fill: #fff; fill-opacity: 0.5"
            />
            <path
              d="M153.13,164.38c9.28-3.71,14.32-3.8,23,0"
              style="
                fill: none;
                stroke: #333233;
                stroke-linecap: round;
                stroke-width: 4px;
              "
            />
            <path
              d="M106.52,159.57l-7.89-7.67"
              style="fill: none; stroke: #333233; stroke-width: 4px"
            />
            <path
              d="M220.57,155.21l8.56-3.81"
              style="fill: none; stroke: #333233; stroke-width: 4px"
            />
            <path
              d="M131.29,141.84l3.59,3.59-29.7,29.69-1.4-1.4c-.17-.64-.3-1.29-.42-2a25.43,25.43,0,0,1-.31-5.82l24.13-24.13A25.6,25.6,0,0,1,131.29,141.84Z"
              style="
                fill: #fff;
                fill-opacity: 0.15000000596046448;
                fill-rule: evenodd;
              "
            />
            <path
              d="M152.52,163.4A23.93,23.93,0,1,1,125,144.09,23.79,23.79,0,0,1,152.52,163.4Z"
              style="
                fill-opacity: 0.30000001192092896;
                stroke: #333233;
                stroke-width: 4px;
                fill: url(#Gradiente_sem_nome_2);
              "
            />
            <path
              d="M226.41,168.38a25.14,25.14,0,0,0-.35-5.31c0-.19-.06-.37-.1-.56l-2.5-2.5L192.3,191.17l.9.9a25.83,25.83,0,0,0,8.54,1Z"
              style="
                fill: #fff;
                fill-opacity: 0.15000000596046448;
                fill-rule: evenodd;
              "
            />
            <path
              d="M224.09,163.4a23.93,23.93,0,1,1-27.56-19.31A23.79,23.79,0,0,1,224.09,163.4Z"
              style="
                fill-opacity: 0.30000001192092896;
                stroke: #333233;
                stroke-width: 4px;
                fill: url(#Gradiente_sem_nome_2-2);
              "
            />
          </g>
        </g>
      </svg>
    </div>
    <div class="User_info">
      <h1>{{ infoUser.name }} {{ infoUser.last_name }}</h1>
      <span class="bio"></span>
    </div>

    <!-- Sobre -->
    <div class="Menu_background" :style="{ background: Color_238 }"></div>
    <div class="Sobre">
      <div class="Menu" :style="{ 'border-right-color': Color_fff }">
        <span :style="{ color: Color_fff }">
          {{ Label_sobre }}
        </span>
      </div>
      <div class="itens">
        <span :style="{ background: '#fff' }" class="years">
          <span>{{ years }}</span>
          {{ FormataStringData(infoUser.date_of_birth) }}</span
        >
        <span :style="{ background: '#fff' }" class="sexo">
          <span>{{ sexo }}</span
          >{{ infoUser.genre }}</span
        >
        <span :style="{ background: '#fff' }" class="email">
          <span> {{ email }} </span>
          {{ infoUser.email }}</span
        >
        <!-- <span :style="{ background: '#fff' }" class="cit">
          <span>{{ cit }}</span
          >{{ User.cit }}</span
        > -->
        <!-- <span :style="{ background: '#fff' }" class="NumberProdutos">
          <span>{{ products }}</span
          >{{ User.NumberProdutos }}</span
        > -->
      </div>
    </div>

    <!-- Produtos
    <div class="Produtos_background" :style="{ background: Color_976 }"></div>
    <div class="Card">
      <div class="Menu" :style="{ 'border-right-color': Color_fff }">
        <span :style="{ color: Color_fff }">
          {{ Label_Produtos }}
        </span>
      </div>
      <div class="Cards">
        <CardsProdutos
          v-for="(Card, index) in infoProdutos"
          :key="'Card' + index"
          :img="Card.img"
          :title-img="Card.img"
          :title="Card.title"
          :preco="Card.preco"
          :preco-for="Card.precoFor"
          :comprar-color="Color_976"
          :background="Color_fff"
          :color="Color_000"
        />
      </div>
    </div> -->
  </main>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      User_img: 'https://github.com/karllasouzza.png',

      // Sobre
      Label_sobre: 'Sobre',
      years: 'Idade:',
      sexo: 'Orientação sexual:',
      // products: 'Produtos postados:',
      email: 'E-mail:',
      // cit: 'Cidade atual:',
      // infoUser: [
      //   {
      //     name: 'Karlla Souzza',
      //     sexo: 'Mulher Transgenera',
      //     cit: 'Taquaritinga-Sp',
      //     years: '18 anos',
      //     email: 'Karlla.souzza7@gmail.com',
      //     bio: 'Nascer em um corpo de "homem" nao me torna menos mulher',
      //     NumberProdutos: '330',
      //   },
      // ],

      // Produtos
      // Label_Produtos: 'Produtos',
      // infoProdutos: [
      //   {
      //     img:
      //       'https://cdn.pixabay.com/photo/2018/05/08/20/19/pomegranate-3383814_960_720.jpg',
      //     title: 'Sementes de Romã',
      //     preco: '15,00',
      //     precoFor: '13,00',
      //   },
      //   {
      //     img:
      //       'https://cdn.pixabay.com/photo/2018/05/08/20/19/pomegranate-3383814_960_720.jpg',
      //     title: 'Sementes de Romã',
      //     preco: '15,00',
      //     precoFor: '13,00',
      //   },
      //   {
      //     img:
      //       'https://cdn.pixabay.com/photo/2018/05/08/20/19/pomegranate-3383814_960_720.jpg',
      //     title: 'Sementes de Romã',
      //     preco: '15,00',
      //     precoFor: '13,00',
      //   },
      // ],
    }
  },
  head: {
    title: 'CWIA | Perfil',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '', // palavras utilizadas (SEO) EX: "melhores remedios" , "soluçao adequada".
      },
    ],
  },
  computed: {
    ...mapState({
      Color_fff: (state) => state.Colors.Color_fff,
      Color_000: (state) => state.Colors.Color_000,
      Color_238: (state) => state.Colors.Color_238,
      Color_976: (state) => state.Colors.Color_976,
      idioma: (state) => state.Acessibilidade.idioma,

      // Dados do usuario
      infoUser: (state) => state.Usuario.User,
    }),
  },
  created() {
    // Portugues-br
    if (this.idioma === 'pt') {
      this.Label_sobre = 'Sobre'
      this.years = 'Data de nascimento'
      this.sexo = 'Orientação sexual:'
      // this.products = 'Produtos postados:'
      this.email = 'E-mail:'
      // this.cit = 'Cidade atual'
      // this.Label_Produtos = 'Produtos'
    }
    // Ingles
    else if (this.idioma === 'en') {
      this.Label_sobre = 'About'
      this.years = 'Date of birth'
      this.sexo = 'Sexual orientation:'
      // this.products = 'Posted products:'
      this.email = 'E-mail:'
      // this.cit = 'Current City'
      // this.Label_Produtos = 'Products'
    }
    // Espanhol
    else {
      this.Label_sobre = 'Acerca de'
      this.years = 'Fecha de nacimiento'
      this.sexo = 'Orientación sexual:'
      // this.products = 'Productos publicados:'
      this.email = 'Correo electrónico:'
      // this.cit = 'Ciudad Actual'
      // this.Label_Produtos = 'Productos'
    }
  },
  methods: {
    ...mapMutations({
      PageOn: 'Header/Page_on_perfil',
    }),

    FormataStringData(data) {
      const dia = data.split('-')[0]
      const mes = data.split('-')[1]
      const ano = data.split('-')[2]

      return ano + '/' + ('0' + mes).slice(-2) + '/' + ('0' + dia).slice(-4)
      // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
    },
  },
}
</script>

<style scoped>
main {
  width: 100%;
  height: 100%;
  display: grid;
  /* grid-template-rows: 55px 169px 180px 40px 85px 20px 0 400px 50px 400px 60px 73px; */
  grid-template-rows: 55px 168px 180px 40px 85px 20px 0 400px 50px;
  grid-template-columns: 1fr 940px 1fr;
}
.Detalhe {
  grid-row: 12;
  grid-column: 1/4;
}

/* fotos - perfil e capa  */
.User_fotos {
  background-size: cover;
  grid-row: 2/4;
  grid-column: 2/3;
  border-radius: 0 0 20px 20px;
}

.Foto_perfil {
  width: 166px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row: 3;
  grid-column: 2;
  margin: auto auto;
  border-radius: 0 30px;
  background-color: #004b23;
}
.Foto_perfil svg {
  width: 130px;
  height: 190px;
}

/* informaços do usuario  */
.User_info {
  grid-row: 5/6;
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.User_info > span,
.User_info > h1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.Menu_background {
  grid-row: 7/9;
  grid-column: 1/4;
}
.Menu {
  grid-row: 7/8;
  grid-column: 2/3;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  width: 200px;
  border-right: 2px solid;
}
.Menu > span {
  height: 50px;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: bold;
  padding: 0 20px;
  font-size: 30px;
}

.Sobre {
  width: 100%;
  height: 400px;
  grid-row: 8/9;
  grid-column: 2/3;
  display: flex;
  flex-direction: row;
  padding: 10px;
  border-radius: 10px;
}
.itens {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  width: 70%;
}

.Sobre > .itens > span {
  width: auto;
  height: 45px;
  border-radius: 15px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  padding: 0 25px 0 0;
}
.Sobre > .itens > span:first-child {
  margin-top: 0;
}
.Sobre > .itens > span > span:first-child {
  background: lightgreen;
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: bold;
  padding: 0 6px;
  border-radius: 15px 0 0 15px;
  margin-right: 25px;
}

/* Produtos */
.Produtos_background {
  grid-row: 10/11;
  grid-column: 1/4;
}
.Card {
  width: 100%;
  height: 400px;
  grid-row: 10/11;
  grid-column: 2/3;
  display: flex;
  flex-direction: row;
  padding: 10px;
  border-radius: 10px;
}
.Card > .Cards {
  display: flex;
  flex-direction: row;
  margin: 0 20px;
  padding: 20px 0;
  width: 70%;
  height: 98%;
  min-width: 70%;
  min-height: 350px;
  overflow-x: Scroll;
}
.Card > .Cards:last-child::-webkit-scrollbar {
  width: 16px;
  background: transparent;
}
.Card > .Cards:last-child::-webkit-scrollbar-thumb {
  background: white;
  cursor: pointer;
  border-radius: 8px;
}

@media (max-width: 940px) {
  .User_fotos {
    background-size: cover;
    grid-row: 2/4;
    grid-column: 1/2;
    border-radius: 0 0 20px 20px;
  }
  main {
    width: 100%;
    height: 100%;
    display: grid;
    /* grid-template-rows: 55px 169px 180px 40px 85px 20px 0 400px 50px 400px 60px 73px; */
    grid-template-rows: 55px 50px 170px 35px 100px 20px 0 480px 50px;
    grid-template-columns: 1fr;
  }

  .Foto_perfil {
    width: 116px;
    height: 166px;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-row: 3/5;
    grid-column: 1;
    margin: auto auto;
    border-radius: 0 30px;
    background-color: #004b23;
  }
  .Foto_perfil svg {
    width: 100px;
    height: 130px;
  }
  .User_info {
    grid-row: 5/6;
    grid-column: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .Sobre {
    width: 100%;
    height: max-content;
    grid-row: 8/9;
    grid-column: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    border-radius: 10px;
    align-items: center;
  }
  .Sobre > .itens > span {
    width: auto;
    height: 85px;
    border-radius: 15px;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3px;
  }
  .Sobre > .itens > span > span:first-child {
    width: 100%;
    height: 50%;
    justify-content: center;
    border-radius: 15px 15px 0 0;
    margin-bottom: 2%;
    margin-right: 0;
  }
  .Menu {
    grid-row: 7/8;
    grid-column: 2/3;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 100%;
    border-bottom: 2px solid;
    border-right: none;
  }
}
@media (max-width: 512px) {
  .Sobre > .itens {
    width: 100%;
  }
}
</style>
