import React from "react"
import SimilarListTv from "./SimilarListTv"

const SimilarListsOfTv = props => {
  const movies = {
    upcoming: {
      apiCall: "upcoming",
      header: "Recommendations",
    },
  }

  return (
    <div>
      {Object.keys(movies).map((item, i) => (
        <div key={i}>
          <SimilarListTv
            tmbdId={props.tmbdId}
            heading={movies[item].header}
            apiCall={movies[item].apiCall}
          />
        </div>
      ))}
    </div>
  )
}

export default SimilarListsOfTv
