import React, { useCallback, useEffect, useState } from "react"
import { Components } from "../../data/Constants"
import Styles from "./Layout.module.css"
import { AiOutlineSearch } from "react-icons/ai"
import {
  Backdrop,
  Divider,
  KbdKey,
  Portal,
  Text,
  useWindowSize,
} from "zenith-ui"
import { useRouter } from "next/router"

const Search = () => {
  const [search, setSearch] = useState("")
  const [searchValue, setSearchValue] = useState<null | string[]>(null)
  const [isSearch, setIsSearch] = useState(false)
  const windowSize = useWindowSize()
  const router = useRouter()

  const searchableComponents = Components.map((data) =>
    data.items.map((item) => item),
  ).flat(1)

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
    // Checks if the user has types 3 char
    if (search.length >= 2) {
      const temp = searchableComponents.filter((item) => {
        return item.toLowerCase().includes(search.toLocaleLowerCase())
      })
      setSearchValue(temp)
    } else setSearchValue(null)
  }

  // handle what happens on key press
  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === "k") {
      setIsSearch((prevState) => !prevState)
    }
  }, [])

  useEffect(() => {
    // attach the event listener
    document.addEventListener("keydown", handleKeyPress)

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [handleKeyPress])

  const handleClick = () => setIsSearch((prevState) => !prevState)

  return windowSize.width < 800 ? (
    <></>
  ) : (
    <>
      <button className={Styles.search} onClick={handleClick}>
        <div className={Styles.row}>
          <AiOutlineSearch />
          <Text margin={{ left: ".4rem" }} font={{ size: "1.6rem" }}>
            Search the docs
          </Text>
        </div>

        <div>
          <KbdKey margin={{ m: "0" }}>CTRL</KbdKey>
          <KbdKey margin={{ m: "0", left: ".4rem" }}>K</KbdKey>
        </div>
      </button>

      {isSearch ? (
        <Portal>
          <Backdrop zIndex="12" onClick={handleClick} isOpen={isSearch} />
          <div className={Styles.search_container}>
            <input
              autoFocus={true}
              className={Styles.search}
              value={search}
              onChange={handleSearch}
              placeholder="Search the docs"
            />

            {searchValue ? (
              <div className={Styles.values}>
                <Divider color="white" margin={{ x: ".4rem" }} />
                {searchValue?.map((value) => (
                  <div className={Styles.value} key={value}>
                    <Text
                      onClick={() => {
                        router.push(`/docs/${value.toLowerCase()}`)
                        setIsSearch(false)
                        setSearch("")
                        setSearchValue(null)
                      }}
                    >
                      {value}
                    </Text>
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
        </Portal>
      ) : (
        <></>
      )}
    </>
  )
}

export default Search
