import { Box, CircularProgress, Fade, Input, Popper, Skeleton, TextField, Typography } from "@mui/material";
import stars from '../assets/Tishtar-Blog.jpg'
import diamond from '../assets/Diamond.jpg'
import nader from '../assets/Nader-Mohaddes.jpg'
import ButtonOutline from "../components/buttons/buttonOutline";
import styled from "@emotion/styled/macro";
import BlogSmall from "../components/blogs/blogSmall";
import { FilterAltOutlined, Search } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Details = styled(Box)(({ theme }) => ({
    display: 'flex', textAlign: 'center', boxSizing: 'border-box',
    flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
}))
const SearchBox = styled(Box)(({ theme }) => ({
    display: 'flex', boxSizing: 'border-box', padding: '8px 12px',
    alignItems: 'center', borderRadius: '32px', border: '1px solid #b3b3b3',
    width: '100%', gap: '10px'
}))
const FilterInputBox = styled(Box)(({ theme }) => ({
    display: 'flex', boxSizing: 'border-box',
    alignItems: 'center', borderBottom: '1px solid #b3b3b3',
    width: '100%', justifyContent: 'space-between', padding: '0 0 12px 0'
}))
const FilterInput = styled('input')(({ theme }) => ({
    display: 'block', boxSizing: 'border-box',
    border: '1px solid #b3b3b3', outline: 'none',
    width: '12px', height: '12px', borderRadius: '0', accentColor: "#5F6368"
}))
const FilterBox = styled(Box)(({ theme }) => ({
    // display: 'flex',
    boxSizing: 'border-box', padding: '8px 12px',
    alignItems: 'center', borderRadius: '32px',
    width: 'max-content', gap: '4px'
}))
const ApplyButton = styled(Box)(({ theme }) => ({
    display: 'flex', justifyContent: 'center',
    boxSizing: 'border-box', padding: '8px',
    alignItems: 'center', borderRadius: '25px',
    width: 'max-content', cursor: 'pointer', transition: '500ms ease',
    fontWeight: 500, color: 'white', fontSize: '14px', backgroundColor: '#5F6368',
    '&:hover': {
        backgroundColor: '#08113b',
    }
}))
const ImageScroll = styled(Box)(({ theme }) => ({
    boxSizing: 'border-box',
    width: '100%',
    // height: '100%',
    overflowY: 'hidden',
    scrollBehavior: 'smooth',
    overflowX: 'scroll',
    '&::-webkit-scrollbar': {
        background: 'transparent',
        height: '8px',
        width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
        height: '8px',
        width: '8px',
        background: '#08113b',
        color: '#08113b',
        border: 'none',
        borderRadius: '0px'
    },
    '&::-webkit-scrollbar-button': {
        display: 'none'
    },
}))
const Image = styled(Box)(({ theme }) => ({
    backgroundPosition: 'center', backgroundColor: '#d9d9d9',
    backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
    height: '100%',
    // aspectRatio: '1/1'
}))

const Blogs = ({ language }) => {
    const navigate = useNavigate()
    const [blogs, setBlogs] = useState(undefined)
    const [totalblogs, setTotalBlogs] = useState(undefined)
    const [topBlog, setTopBlog] = useState(undefined)
    const getBlogs = async () => {
        let request = await fetch(`https://admin.gopatjewelry.com/api/blogs?populate=*`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer 210f4fdc9cfc30870e2f3ca17b2d4f410d6ae5ce2afaf1445b6118731abaf524c008c11a503bf8b3d7a4fdff7887a67578791c89077bb18c23df8b1a672c01df203eb28a3bbbf2f68867a683f12ba03ac070acdbaa08bc5b970f51334fdb102bc1154e6009e3d3c00d6f80a6dbb58b0dbe1691f560e5f582dde5c65f5ded68c9`,
            }
        })
        let response = await request.json()
        setBlogs(response.data)
        setTotalBlogs(response.data)
        setTopBlog(response.data[0])
    }
    useEffect(() => {
        getBlogs()
    }, [])


    const [selectedFilters, setSelectedFilters] = useState([])
    const [searchedPhrase, setSearchedPhrase] = useState('')
    const filters = ["Jewerly Education", "Campaigns", "Entrepreneurs", "Ancient Stories", "News & Events"]
    const filtersFa = ["درباره جواهرات", "کمپین ها", "کارآفرینان", "داستان های باستانی", "تازه ها و رویداد ها"]
    const [anchorEl, setAnchorEl] = useState(null);

    const handleApplyFiltering = () => {
        if (selectedFilters.length > 0) {
            console.log(selectedFilters)
            const newBlogs = totalblogs.filter((blog) => selectedFilters.includes(blog.attributes.Filter) || selectedFilters.includes(blog.attributes.FilterFa))
            setBlogs(newBlogs)
        } else {
            setBlogs(totalblogs)
        }
    }
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : window.document.getElementById("filtering-box"));
    };
    const open = Boolean(anchorEl);
    const id = open ? 'filters-popper' : undefined;

    const addToSelected = (filter) => {
        if (selectedFilters.includes(filter)) {
            let array = selectedFilters
            const index = array.indexOf(filter);
            if (index > -1) { // only splice array when item is found
                array.splice(index, 1); // 2nd parameter means remove one item only
            }
            setSelectedFilters(array)
        } else {
            let array = selectedFilters
            array.push(filter)
            setSelectedFilters(array)
        }
    }
    useEffect(() => {
        if (searchedPhrase && searchedPhrase !== '') {
            const newBlogs = totalblogs.filter((blog) => blog.attributes.title.toLowerCase().includes(searchedPhrase.toLowerCase()) || blog.attributes.titleFa.toLowerCase().includes(searchedPhrase.toLowerCase()))
            setBlogs(newBlogs)
        } else {
            setBlogs(totalblogs)
        }
    }, [searchedPhrase])
    return (
        <>
            {topBlog ?
                <>
                    <Box sx={{
                        // height: { xs: 'calc(100vh - 50px)', sm: 'calc(100vh - 50px)', md: 'calc(100vh - 60px)' },
                        height: { xs: '100%', md: 'calc(100vh - 60px)' },
                        width: '100%', boxSizing: 'border-box',
                        display: 'flex', flexDirection: { xs: 'column', md: 'row' },
                        // mb: { xs: 'none', md: '60px' }
                    }}>
                        <Box sx={{
                            display: 'flex',
                            height: { xs: '420px', md: '100%' },
                            width: '100%',
                            boxSizing: 'border-box',
                            width: '100%', flexWrap: 'nowrap'
                        }}>
                            <Image sx={{
                                backgroundImage: `url('https://admin.gopatjewelry.com${topBlog.attributes.coverimage.data[0].attributes.url}')`,
                                width: { xs: '100vw', md: '100%' }
                            }} />
                        </Box>
                        <Details sx={{
                            mx: { xs: '0', md: '32px' },
                            px: { xs: '32px', md: '0', lg: '32px' },
                            py: '32px',
                            gap: '16px',
                            width: { xs: '100%', md: '30%' }
                        }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <Typography variant="h1" sx={{
                                    whiteSpace: 'nowrap',
                                    fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontWeight: 500, color: '#08113B'
                                }}>
                                    {language == 'en' ? topBlog.attributes.title : topBlog.attributes.titleFa}
                                </Typography>
                                <Typography variant="h1" sx={{
                                    whiteSpace: 'nowrap', fontWeight: 500,
                                    fontSize: { xs: '16px', sm: '18px', md: '18px' }, color: '#b3b3b3'
                                }}>
                                    {language == 'en' ? topBlog.attributes.subtitle : topBlog.attributes.subtitleFa}
                                </Typography>
                            </Box>
                            <Typography sx={{
                                color: '#999', fontWeight: 500, width: '100%',
                                textAlign: 'center', fontSize: { xs: '12px', md: '14px' }
                            }}>
                                {language == 'en' ? topBlog.attributes.description : topBlog.attributes.descriptionFa}
                            </Typography>
                            <ButtonOutline text={language == 'en' ? 'read more' : 'بیشتر بخوانید'} action={() => navigate(`/blog/${topBlog.id}/${topBlog.attributes.title}`)} />
                        </Details>
                    </Box>
                </> : <Skeleton height={'400px'} />}
            <Box sx={{
                width: '100%', display: 'flex',
                flexDirection: { xs: 'column', md: 'row-reverse' },
                mt: { xs: '0', md: '50px' }, mb: '32px', position: 'relative'
            }}>

                <Box id="filtering-box" sx={{
                    borderTop: { xs: '1px solid #b3b3b3', md: 'none' },
                    borderBottom: { xs: '1px solid #b3b3b3', md: 'none' },
                    borderLeft: { xs: 'none', md: '1px solid #b3b3b3' },
                    boxSizing: 'border-box', height: 'max-content',
                    width: { xs: '100%', md: '30%' },
                    padding: { xs: '16px', md: '64px 0 0 32px', lg: '64px 0 0 64px' },
                    mx: { xs: '0', md: '32px' },
                    my: { xs: '32px', md: '0' },
                    position: 'sticky', right: 0, top: 0, backgroundColor: 'white',
                    display: 'flex', alignItems: { xs: 'center', md: 'end' }, zIndex: 9,
                    flexDirection: { xs: 'row', md: 'column' }, gap: { xs: '16px', md: '32px' }
                    // padding: { xs: '16px', md: '32px' }
                }}>
                    <SearchBox>
                        <Search sx={{ color: '#5F6368' }} fontSize="24px" />
                        <TextField placeholder={language == 'en' ? "Search Blog" : 'جستجوی بلاگ'}
                            sx={{ width: '100%' }}
                            onChange={(e) => setSearchedPhrase(e.target.value)}
                            id="standard-basic" variant="standard" InputProps={{ disableUnderline: true }}
                        />
                    </SearchBox>
                    <FilterBox sx={{
                        display: { xs: 'flex', md: 'none' },
                        border: { xs: '1px solid #b3b3b3', md: 'none' },
                        cursor: 'pointer'
                    }} onClick={handleClick}>
                        <Typography sx={{ color: '#5F6368', fontWeight: 500, }}>{language == 'en' ? 'Filters' : 'فیلتر'}</Typography>
                        <FilterAltOutlined sx={{ color: '#5F6368' }} fontSize="24px" />
                    </FilterBox>
                    <FilterBox sx={{
                        display: { xs: 'none', md: 'flex' },
                        border: { xs: '1px solid #b3b3b3', md: 'none' },
                    }}>
                        <Typography sx={{ color: '#5F6368', fontWeight: 500, }}>{language == 'en' ? 'Filters' : 'فیلتر'}</Typography>
                        <FilterAltOutlined sx={{ color: '#5F6368' }} fontSize="24px" />
                    </FilterBox>

                    <Popper
                        sx={{
                            right: '16px !important', width: '200px !important',
                            display: { xs: 'flex', md: 'none' }
                        }}
                        placement="bottom-end" id={id} open={open} anchorEl={anchorEl} transition>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Box sx={{
                                    border: '1px solid #b3b3b3', borderTop: 'none',
                                    p: '12px', bgcolor: 'background.paper',
                                    display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'end',
                                    gap: '12px'
                                }}>
                                    {language == 'en' ? <>
                                        {filters.map((filter) => {
                                            return (
                                                <FilterInputBox key={filter}>
                                                    <Typography sx={{ color: '#5F6368', fontWeight: 500 }}>{filter}</Typography>
                                                    <FilterInput
                                                        onChange={() => addToSelected(filter)}
                                                        type="checkbox" value={filter}
                                                        // onClick={() => addToSelected(filter)}
                                                        checked={selectedFilters.includes(filter)}
                                                    />
                                                </FilterInputBox>
                                            )
                                        })}
                                    </> : <>
                                        {filtersFa.map((filter) => {
                                            return (
                                                <FilterInputBox key={filter}>
                                                    <Typography sx={{ color: '#5F6368', fontWeight: 500 }}>{filter}</Typography>
                                                    <FilterInput
                                                        onChange={() => addToSelected(filter)}
                                                        type="checkbox" value={filter}
                                                        // onClick={() => addToSelected(filter)}
                                                        checked={selectedFilters.includes(filter)}
                                                    />
                                                </FilterInputBox>
                                            )
                                        })}
                                    </>}
                                    <ApplyButton onClick={handleApplyFiltering}>
                                        {language == 'en' ?
                                            'Apply' :
                                            'اعمال'}
                                    </ApplyButton>
                                </Box>
                            </Fade>
                        )}
                    </Popper>
                    <Box sx={{
                        display: { xs: 'none', md: 'flex' }, alignItems: 'end',
                        flexDirection: 'column', width: '100%', gap: '12px'
                    }}>
                        {language == 'en' ? <>
                            {filters.map((filter) => {
                                return (
                                    <FilterInputBox key={filter}>
                                        <Typography sx={{ color: '#5F6368', fontWeight: 500 }}>{filter}</Typography>
                                        <FilterInput
                                            type="checkbox" value={filter}
                                            // checked={selectedFilters.includes(filter)}
                                            onClick={() => addToSelected(filter)} />
                                    </FilterInputBox>
                                )
                            })}
                        </> : <>
                            {filtersFa.map((filter) => {
                                return (
                                    <FilterInputBox key={filter}>
                                        <Typography sx={{ color: '#5F6368', fontWeight: 500 }}>{filter}</Typography>
                                        <FilterInput
                                            type="checkbox" value={filter}
                                            // checked={selectedFilters.includes(filter)}
                                            onClick={() => addToSelected(filter)} />
                                    </FilterInputBox>
                                )
                            })}
                        </>}
                        <ApplyButton onClick={handleApplyFiltering}>
                            {language == 'en' ?
                                'Apply' :
                                'اعمال'}
                        </ApplyButton>

                    </Box>

                </Box>

                {blogs ?
                    <>{blogs.length > 0 ?

                        <Box sx={{
                            width: '100%', display: 'flex', flexDirection: 'column', gap: '32px'
                        }}>
                            {blogs.map((blog) => {
                                return (<BlogSmall key={blog.id} image={blog.attributes.coverimage.data ? `https://admin.gopatjewelry.com${blog.attributes.coverimage.data[0].attributes.url}` : undefined}
                                    id={blog.id}
                                    title={blog.attributes.title} subtitle={blog.attributes.subtitle} date={blog.attributes.createdAt}
                                    description={blog.attributes.description}
                                    titleFa={blog.attributes.titleFa}
                                    subtitleFa={blog.attributes.subtitleFa}
                                    descriptionFa={blog.attributes.descriptionFa}
                                    language={language} />)
                            })}
                        </Box>
                        :
                        <Typography sx={{ color: '#08113b', fontWeight: 500, textAlign: 'center', width: '100%' }}>{language == 'en' ? `No Blog Found` : `بلاگی یافت نشد`}</Typography>
                    }
                    </>
                    : <CircularProgress sx={{ color: '#08113b' }} />}
            </Box>

        </>);
}

export default Blogs;