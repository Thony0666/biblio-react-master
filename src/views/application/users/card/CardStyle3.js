import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Grid, InputAdornment, Menu, MenuItem, OutlinedInput, Pagination, Typography } from '@mui/material';

// project imports
import UserProfileCard from 'ui-component/cards/UserProfileCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { useDispatch, useSelector } from 'store';
import { getProfileCards, filterProfileCards } from 'store/slices/user';

// assets
import { IconSearch } from '@tabler/icons-react';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

// ==============================|| USER CARD STYLE 3 ||============================== //

const CardStyle3 = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [users, setUsers] = React.useState([]);
    const { profileCards } = useSelector((state) => state.user);

    React.useEffect(() => {
        setUsers(profileCards);
    }, [profileCards]);

    React.useEffect(() => {
        dispatch(getProfileCards());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    let usersResult = <></>;
    if (users) {
        usersResult = users.map((user, index) => (
            <Grid key={index} item xs={12} sm={6} lg={4} xl={3}>
                <UserProfileCard {...user} />
            </Grid>
        ));
    }

    const [search, setSearch] = React.useState('');
    const handleSearch = async (event) => {
        const newString = event?.target.value;
        setSearch(newString);

        if (newString) {
            dispatch(filterProfileCards(newString));
        } else {
            dispatch(getProfileCards());
        }
    };

    return (
        <MainCard
            title={
                <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                    <Grid item>
                        <Typography variant="h3">Cards</Typography>
                    </Grid>
                    <Grid item>
                        <OutlinedInput
                            id="input-search-card-style3"
                            placeholder="Search"
                            value={search}
                            onChange={handleSearch}
                            startAdornment={
                                <InputAdornment position="start">
                                    <IconSearch stroke={1.5} size="16px" />
                                </InputAdornment>
                            }
                            size="small"
                        />
                    </Grid>
                </Grid>
            }
        >
            <Grid container direction="row" spacing={gridSpacing}>
                {usersResult}
                <Grid item xs={12}>
                    <Grid container justifyContent="space-between" spacing={gridSpacing}>
                        <Grid item>
                            <Pagination count={10} color="primary" />
                        </Grid>
                        <Grid item>
                            <Button
                                variant="text"
                                size="large"
                                sx={{ color: theme.palette.grey[900] }}
                                color="secondary"
                                endIcon={<ExpandMoreRoundedIcon />}
                                onClick={handleClick}
                            >
                                10 Rows
                            </Button>
                            <Menu
                                id="menu-user-card-style3"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                variant="selectedMenu"
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}
                                transformOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right'
                                }}
                            >
                                <MenuItem onClick={handleClose}> 10 Rows</MenuItem>
                                <MenuItem onClick={handleClose}> 20 Rows</MenuItem>
                                <MenuItem onClick={handleClose}> 30 Rows </MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default CardStyle3;
