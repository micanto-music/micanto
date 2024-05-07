import CardWrapper from "./CardWrapper";
import AlbumCard from "../components/Album/Card";
import ArtistCard from "../components/Artist/Card";
import Card from "../components/Track/Card";
import { AiOutlineClose } from "react-icons/ai";
import {useTranslation} from "react-i18next";
import React from "react";

export default function LastSearches({lastSearches, removeFromLastSearch}) {
    const [t] = useTranslation();

    return(
        <>
            {lastSearches.length > 0 &&
                <>
                <h2>{t('search.top_results')}</h2>
                <CardWrapper>
                    {lastSearches?.map((item, i) => (
                        <>
                            {item.type == 'tracks' &&
                                <div className="relative">
                                    <Card width={200} track={item}/>
                                    <button onClick={removeFromLastSearch} className="remove-btn"><AiOutlineClose /></button>
                                </div>
                            }
                            {item.type == 'artist' &&
                                <div className="relative">
                                    <ArtistCard width={200} artist={item} showType={true}/>
                                    <button onClick={removeFromLastSearch} className="remove-btn"><AiOutlineClose/></button>
                                </div>
                            }
                            {item.type == 'albums' &&
                                <div className="relative">
                                    <AlbumCard width={200} album={item}/>
                                    <button onClick={removeFromLastSearch} className="remove-btn"><AiOutlineClose/></button>
                                </div>
                            }
                        </>
                    ))}
                </CardWrapper>
                </>
            }

            {lastSearches.length === 0 &&
                <div className="flex items-center justify-center flex-1">
                    <div className="text-center">
                        <h2>{t('lastsearches.empty.title')}</h2>
                        {t('lastsearches.empty.body')}
                    </div>
                </div>
            }
        </>
    );

}
