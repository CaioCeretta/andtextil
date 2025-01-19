import styled from 'styled-components'

export const ContainerContainer = styled.div`
  max-width: 1920px;
  /* Base padding */
  padding: 0 1rem; /* Equivalent to Tailwind CSS 'px-4' */

  @media (min-width: 768px) {
    padding: 0.5rem; /* Equivalent to Tailwind CSS 'md:px-2' */
  }

  /* Responsive padding for extra large screens */
  @media (min-width: 1280px) {
    padding: 0 5rem; /* Equivalent to Tailwind CSS 'xl:px-20' */
  }
`
