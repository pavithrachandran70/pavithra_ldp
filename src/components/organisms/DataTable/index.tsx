
import { useState } from 'react';
import { bitcoinData } from '../../../utils/constants';
import Row from '../../molecules/Row/index';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { Container } from '../../../theme/style';
import { StyledWrapper, SearchWrapper, StyledTextField } from '../../../theme/style';

const BitcoinTable = () => {
  const [search, setSearch] = useState('');

  const filtered = bitcoinData.filter((item) =>
    item.from.toLowerCase().includes(search.toLowerCase()) ||
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <StyledWrapper>
        <SearchWrapper>
          <StyledTextField
            placeholder="Search all assets"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
        </SearchWrapper>

        {filtered.map((item, index) => (
          <Row key={index} {...item} type={item.type as 'success' | 'error' | 'normal'} />
        ))}
      </StyledWrapper>
    </Container>
  );
};

export default BitcoinTable;
