import Header from "../components/Header/Header";
import HeaderTitle from "../components/Header/HeaderTitle";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import Scroll from "../components/Scroll";
import {FilePond} from "react-filepond";
import {PlayerAPI} from "../api/PlayerAPI";
import axios from '../axios';

export default function Upload() {
    const [t] = useTranslation();
    const [files, setFiles] = useState([])

    const processHandler = (fieldName, file, metadata, pond_load, pond_error, pond_progress, pond_abort) => {
        const formData = new FormData();
        formData.append('file', file, file.name);

        let controller = new AbortController();
        let promise = axios
            .post("api/upload", formData, {
                headers: {'Content-Type': 'multipart/form-data'},
                signal: controller.signal,
                onUploadProgress: function (progressEvent) {
                    // var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    var e = progressEvent;
                    pond_progress(e.lengthComputable, e.loaded, e.total);
                }
            })
            .then(function ({data}) {
                return data;
            })

        promise
            .then(function (data) {

                // write your own code to get file and filepath
                if (data['error']) {
                    // "Cannot create file 'ArticleCovers/0001.jpg' because it already exists."
                    pond_error('error uploading:' + file['error']);
                    console.error(data);
                } else if (data['path']) {
                    // the pond_load method accepts either a string (id) or an object
                    // here use path with filename as uniqueFileId
                    pond_load(data['path']);
                } else {
                    pond_error('err uploading');
                    console.error(data);
                }
            })
            .catch(function (reason) {
                pond_error('err uploading');
                console.error(reason);
            });

        //expose an abort method so the request can be cancelled
        return {
            abort: function () {
                // This function is entered if the user has tapped the cancel button
                controller.abort();
                // Let FilePond know the request has been cancelled
                pond_abort();
            }
        };
    }

    const serverOptions = {
        process: processHandler
    };

    return(
        <div>
            <Header title={t('upload.title')}>
                <HeaderTitle>{t('upload.title')}</HeaderTitle>
            </Header>

            <Scroll>
                <div className="pl-5 pr-2">
                    <FilePond
                        files={files}
                        credits={false}
                        onupdatefiles={setFiles}
                        allowMultiple={true}
                        process
                        server={serverOptions}
                        withCredentials="true"
                        //onerror={(response) =>{console.log(response)}}
                        name="files" /* sets the file input name, it's filepond by default */
                        labelIdle={t('upload.dnd')}
                        labelFileProcessing={t('upload.processing')}
                        labelFileProcessingError={t('upload.processingError')}
                        labelTapToRetry={t('upload.tapToRetry')}
                        labelTapToUndo={t('upload.tapToUndo')}
                        labelFileProcessingComplete={t('upload.processingComplete')}
                        labelTapToCancel={t('upload.tapToCancel')}
                        allowRemove={false}
                        allowRevert={false}
                    />
                </div>
            </Scroll>
        </div>
)

}
