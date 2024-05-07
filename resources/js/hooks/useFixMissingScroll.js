import { useCallback, useEffect, useMemo } from 'react'

function useFixMissingScroll({ hasMoreItems, fetchMoreItems, isLoading, scrollElem = '.main-scroll' }) {

    const fetchCb = useCallback(() => {
        fetchMoreItems()
    }, [fetchMoreItems])

    useEffect(() => {
        if(!isLoading) {
            const mainElement = document.querySelector(scrollElem);
            const hasScroll = mainElement ? mainElement.scrollHeight > mainElement.clientHeight : false;
            if (!hasScroll && hasMoreItems) {
                setTimeout(() => {
                    fetchCb()
                }, 100)
            }
        }
    }, [isLoading, hasMoreItems, fetchCb])
}

export default useFixMissingScroll
