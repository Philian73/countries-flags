import Select from 'react-select'
import { styled } from 'styled-components'

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: provided => ({
      ...provided,
      backgroundColor: 'var(--colors-ui-base)',
      color: 'var(--colors-text)',
      borderRadius: 'var(--radii)',
      padding: '0.25rem',
      border: 0,
      boxShadow: 'var(--shadow)',
      height: '50px',
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      color: 'var(--colors-text)',
      font: state.isSelected ? 'var(--font-medium-800)' : '',
      backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui-base)',
    }),
  },
})`
  width: 200px;
  border-radius: var(--radii);

  & > * {
    box-shadow: var(--shadow);
  }

  & * {
    color: var(--colors-text) !important;
  }

  & div[id*='listbox'] {
    background-color: var(--colors-ui-base);
  }

  & input {
    padding-left: 0.25rem;
  }
`
