/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-nested-ternary */
import React from 'react'
import { debounce } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'

import Search from '../components/Search'

import { getDataUserResult } from '../store/actions/users.action'

function Users() {
  const dispatch = useDispatch()
  const datas = useSelector((state) => state.users.animeList)
  // const datasss = useSelector((state) => state.[namaReducer].[namaStateYangDiInitialStateReducer])

  // const datas = JSON.parse(localStorage.getItem("data"))
  // const datas = JSON.parse(sessionStorage.getItem("datas"))


  const handleSearch = debounce((value) => {
    dispatch(
      getDataUserResult({
        page: 1,
        q: value,
      }),
    )
  }, 500)

  return (
    <div className="bg-white container">
      <div className="my-5">
        <div className="card shadow">
          <div className="card-header">
            Search Anime
            <div className="mt-2">
              <Search handleSearch={handleSearch} />
            </div>
          </div>

          <div className="card-body">
            <div>
              {datas === null ? (
                <div className="text-center">
                  <p>Data kosong</p>
                </div>
              ) : (
                <div className="row">
                  {datas?.data?.map((items) => (
                    <div
                    key={items?.mal_id}
                      data-testid="card-list-anime"
                      aria-hidden
                      className="col-md-6"
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-3 col-6">
                          <img
                            data-testid="image-list-anime"
                            src={`${items?.images?.jpg?.image_url}`}
                            alt="banner-anime"
                            className="mb-2 img-fluid rounded"
                            width="150px"
                            height="150px"
                          />
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-9 col-6">
                          <div>
                            <h4 data-testid="title-list-anime">
                              {items?.title}
                            </h4>
                            <p data-testid="type-list-anime">
                              Type :{' '}
                              <span
                                className={`badge ${
                                  items?.type === 'TV'
                                    ? 'bg-warning'
                                    : items?.type === 'Movie'
                                      ? 'bg-info'
                                      : 'bg-secondary'
                                }`}
                              >
                                {items?.type}
                              </span>
                            </p>
                            <p data-testid="rating-list-anime">
                              Rating : {items?.score}
                            </p>
                            <p data-testid="rilis-list-anime">
                              Released on : {items?.aired?.string}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users
