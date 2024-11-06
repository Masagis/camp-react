/* eslint-disable no-undef */
import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import Search from '../components/Search'
import '@testing-library/jest-dom';

describe('Component Search Anime', () => {
  test('render the component', () =>{
    render(<Search />)
    expect(screen.getByTestId('search-anime')).toBeInTheDocument("")
  })

  test('render the component with initial value props', () =>{
    const handleChange = jest.fn()
    render(<Search handleSearch={handleChange}/>)
    const inputField = screen.getByTestId('search-anime')
    expect(inputField.value).toBe("")

    fireEvent.change(inputField,{target: {value: 'dragon ball'}})
    expect(inputField.value).toBe('dragon ball')
    expect(handleChange).toHaveBeenCalledWith('dragon ball')
  })

  test('snapshoot', () => {
    const handleChange = jest.fn()
    const renderComponent = render(<Search handleSearch={handleChange} />)
    expect(renderComponent).toMatchSnapshot()
  })

  // test('should be render the component card anime data list', () => {
  //   const data = {
  //     mal_id: 1,
  //     url: 'https://myanimelist.net/anime/1/Cowboy_Bebop',
  //     images: {
  //       jpg: {
  //         image_url: 'https://cdn.myanimelist.net/images/anime/4/19644.jpg',
  //         small_image_url:
  //           'https://cdn.myanimelist.net/images/anime/4/19644t.jpg',
  //         large_image_url:
  //           'https://cdn.myanimelist.net/images/anime/4/19644l.jpg',
  //       },
  //       webp: {
  //         image_url: 'https://cdn.myanimelist.net/images/anime/4/19644.webp',
  //         small_image_url:
  //           'https://cdn.myanimelist.net/images/anime/4/19644t.webp',
  //         large_image_url:
  //           'https://cdn.myanimelist.net/images/anime/4/19644l.webp',
  //       },
  //     },

  //     title: 'Cowboy Bebop',
  //     title_english: 'Cowboy Bebop',
  //     title_japanese: 'カウボーイビバップ',
  //     type: 'TV',
  //     source: 'Original',
  //     episodes: 26,
  //     status: 'Finished Airing',
  //     airing: false,
  //     aired: {
  //       from: '1998-04-03T00:00:00+00:00',
  //       to: '1999-04-24T00:00:00+00:00',
  //       prop: {
  //         from: {
  //           day: 3,
  //           month: 4,
  //           year: 1998,
  //         },
  //         to: {
  //           day: 24,
  //           month: 4,
  //           year: 1999,
  //         },
  //       },
  //       string: 'Apr 3, 1998 to Apr 24, 1999',
  //     },
  //     duration: '24 min per ep',
  //     rating: 'R - 17+ (violence & profanity)',
  //     score: 8.75,
  //     scored_by: 859099,
  //   }

  //   const handleDetailAnime = jest.fn()

  // render(<AnimeData data={data} handleDetailAnime={handleDetailAnime} />)
  //   expect(screen.getByTestId('card-list-anime')).toBeInTheDocument()
  //   expect(screen.getByTestId('image-list-anime')).toHaveAttribute(
  //     'src',
  //     'https://cdn.myanimelist.net/images/anime/4/19644.jpg',
  //   )
  //   expect(screen.getByTestId('title-list-anime')).toHaveTextContent(
  //     'Cowboy Bebop',
  //   )
  //   expect(screen.getByTestId('type-list-anime')).toHaveTextContent('TV')
  //   expect(screen.getByTestId('rating-list-anime')).toHaveTextContent(8.75)
  //   expect(screen.getByTestId('rilis-list-anime')).toHaveTextContent(
  //     'Apr 3, 1998 to Apr 24, 1999',
  //   )

  //   fireEvent.click(screen.getByTestId('card-list-anime'))
  //   expect(handleDetailAnime).toBeCalledTimes(1)
  // })

})