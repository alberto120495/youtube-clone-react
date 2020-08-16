import React from "react";
import TuneIcon from "@material-ui/icons/Tune";
import "./searchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://i.blogs.es/3b6c61/flv/1366_2000.jpg"
        channel="AnimeFLV"
        verified
        subs="660k"
        noOfVideos={382}
        description="Puedes encontrar cualquier variedad de anime en este canal, lo mejor del mundo del anime y animacion japonesa todo en este canal"
      />
      <hr />
      <VideoRow
        views="1.4K"
        subs="660k"
        description="High shcool of the dead historia en 5 minutos"
        timestamp="5 min ago"
        channel="AnimeFLV"
        title="High school of the dead"
        image="https://vignette.wikia.nocookie.net/hotd/images/1/13/High_school_of_the_dead.jpg/revision/latest/scale-to-width-down/340?cb=20120707194016&path-prefix=es"
      />
      <VideoRow
        views="1.4K"
        subs="660k"
        description="High shcool of the dead historia en 5 minutos"
        timestamp="5 min ago"
        channel="AnimeFLV"
        title="High school of the dead"
        image="https://vignette.wikia.nocookie.net/hotd/images/1/13/High_school_of_the_dead.jpg/revision/latest/scale-to-width-down/340?cb=20120707194016&path-prefix=es"
      />
      <VideoRow
        views="1.4K"
        subs="660k"
        description="High shcool of the dead historia en 5 minutos"
        timestamp="5 min ago"
        channel="AnimeFLV"
        title="High school of the dead"
        image="https://vignette.wikia.nocookie.net/hotd/images/1/13/High_school_of_the_dead.jpg/revision/latest/scale-to-width-down/340?cb=20120707194016&path-prefix=es"
      />
      <VideoRow
        views="1.4K"
        subs="660k"
        description="High shcool of the dead historia en 5 minutos"
        timestamp="5 min ago"
        channel="AnimeFLV"
        title="High school of the dead"
        image="https://vignette.wikia.nocookie.net/hotd/images/1/13/High_school_of_the_dead.jpg/revision/latest/scale-to-width-down/340?cb=20120707194016&path-prefix=es"
      />
      <VideoRow
        views="1.4K"
        subs="660k"
        description="High shcool of the dead historia en 5 minutos"
        timestamp="5 min ago"
        channel="AnimeFLV"
        title="High school of the dead"
        image="https://vignette.wikia.nocookie.net/hotd/images/1/13/High_school_of_the_dead.jpg/revision/latest/scale-to-width-down/340?cb=20120707194016&path-prefix=es"
      />
    </div>
  );
}

export default SearchPage;
