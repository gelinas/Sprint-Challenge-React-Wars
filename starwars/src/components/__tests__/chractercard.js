// __tests__/charactercard.js
// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
import '@testing-library/jest-dom/extend-expect'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import CharacterCard from '../charactercard'

test('renders a card based on character data', () => {
  const testCharacter = {
    "name": "Obi-Wan Kenobi", 
    "height": "182", 
    "mass": "77", 
    "hair_color": "auburn, white", 
    "skin_color": "fair", 
    "eye_color": "blue-gray", 
    "birth_year": "57BBY", 
    "gender": "male", 
    "homeworld": "https://swapi.co/api/planets/20/", 
    "films": [
        "https://swapi.co/api/films/2/", 
        "https://swapi.co/api/films/5/", 
        "https://swapi.co/api/films/4/", 
        "https://swapi.co/api/films/6/", 
        "https://swapi.co/api/films/3/", 
        "https://swapi.co/api/films/1/"
    ], 
    "species": [
        "https://swapi.co/api/species/1/"
    ], 
    "vehicles": [
        "https://swapi.co/api/vehicles/38/"
    ], 
    "starships": [
        "https://swapi.co/api/starships/48/", 
        "https://swapi.co/api/starships/59/", 
        "https://swapi.co/api/starships/64/", 
        "https://swapi.co/api/starships/65/", 
        "https://swapi.co/api/starships/74/"
    ], 
    "created": "2014-12-10T16:16:29.192000Z", 
    "edited": "2014-12-20T21:17:50.325000Z", 
    "url": "https://swapi.co/api/people/10/"
}
  const {queryByText, getByLabelText, getByText} = render(
    <CharacterCard 
        name={testCharacter.name}
        birth_year={testCharacter.birth_year}
        species={testCharacter.species}
        films={testCharacter.films}
    />,
  )

  // query* functions will return the element or null if it cannot be found
  // get* functions will return the element or throw an error if it cannot be found
  expect(queryByText(testMessage)).toBeNull()

  // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
  fireEvent.click(getByLabelText(/show/i))

  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  expect(getByText(testMessage)).toBeInTheDocument()
})