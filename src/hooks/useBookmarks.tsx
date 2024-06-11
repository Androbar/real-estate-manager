import type { BookmarkProperty } from '@/types/properties'
import { useState, useEffect } from 'react'

const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState<BookmarkProperty[]>([])

  useEffect(() => {
    const savedBookmarks = localStorage.getItem('bookmarks')
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks) as BookmarkProperty[])
    }
  }, [])

  useEffect(() => {
    // Don't save empty array to local storage
    if (bookmarks.length === 0) {
      return
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  }, [bookmarks])

  const addBookmark = (item: BookmarkProperty) => {
    setBookmarks(prev => {
      const updatedBookmarks = [...prev, item]
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks))
      return updatedBookmarks
    })
  }

  const removeBookmark = (id: string) => {
    setBookmarks(prev => {
      const updatedBookmarks = prev.filter(item => item.id !== id)
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks))
      return updatedBookmarks
    })
  }

  return {
    bookmarks,
    addBookmark,
    removeBookmark,
  }
}

export default useBookmarks
