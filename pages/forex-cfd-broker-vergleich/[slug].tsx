import { Autocomplete, Box, Grid, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import i18n from '@/i18n';
import CompareDetail from '@/components/broker/comparisons/CompareDetail';
import CompareOverview from '@/components/broker/comparisons/CompareOverview';
import CompareProfile from '@/components/broker/comparisons/CompareProfile';
import CompareRegulation from '@/components/broker/comparisons/CompareRegulation';
import CompareSection from '@/components/broker/comparisons/CompareSection';
import CompareService from '@/components/broker/comparisons/CompareService';
import CompareSpreadsAndFees from '@/components/broker/comparisons/CompareSpreadsAndFees';
import CompareTradable from '@/components/broker/comparisons/CompareTradable';
import CompareTradingPlatforms from '@/components/broker/comparisons/CompareTradingPlatforms';
import MDButton from '@/mui/components/MDButton';
import MDTypography from '@/mui/components/MDTypography';
import PageContent from '@/components/shared/view/PageContent';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import MDBox from '@/mui/components/MDBox';
import axios from 'axios';
import config from '@/config';

function BrokerComparePage({ brokerList, author, recordA, recordB, topBroker, category, mostRead, featuredBrokers, forexSchool, forexStrategy, promotion, navigation, categoryFooter}) {

  const router = useRouter();

  const [valueA, setValueA] = useState({
    id: recordA.name_normalized,
    name: recordA.name
  });
  const [valueB, setValueB] = useState({
    id: recordB.name_normalized,
    name: recordB.name
  });

  const onSubmit = (values) => {
    router.push(
      `/forex-cfd-broker-vergleich/${valueA.id}-versus-${valueB.id}`,
    );
  };

  const [title, setTitle] = useState(
    i18n.entities.broker.comparison.title,
  );
  const [description, setDescription] = useState(
    i18n.entities.broker.comparison.metaDescription,
  );

  useEffect(() => {
    setTitle(
      i18n.entities.broker.comparison.vsTitle(recordA?.name || '-',recordB?.name || '-'),
    );
    setDescription(
      i18n.entities.broker.comparison.metaVsDescription(recordA?.name || '-',recordB?.name || '-'),
    );
  }, [recordA, recordB]);

  return (
    <Layout
      title={title}
      keywords={[
        'forex',
        'cfd',
        'broker',
        'vergleich',
        recordA?.name_normalized,
        recordB?.name_normalized,
      ].filter(Boolean)}
      description={description}

      author={author}
      navigation = {navigation}
      topBroker = {topBroker}
      category = { category }
      mostRead = { mostRead }
      featuredBrokers = { featuredBrokers }
      forexSchool = { forexSchool }
      forexStrategy = { forexStrategy }
      promotion = { promotion }
      categoryFooter = { categoryFooter }
    >
      <PageContent
        px={{
          lg: 5,
          xs: 2,
        }}
      >
        <MDBox display="none">
          <Breadcrumb
          navigation={navigation}
            items={[
              {
                name: i18n.entities.broker.comparison.title,
                route: '/forex-cfd-broker-vergleich',
              },
            ]}
          />
        </MDBox>
        <MDTypography variant="h1">
          {i18n.entities.broker.comparison.title}
        </MDTypography>
        <MDTypography
          color="text"
          fontWeight="regular"
          variant="body2"
          mb={2}
        >
          {i18n.entities.broker.comparison.description}
        </MDTypography>
              <MDBox
                sx={{
                  '& > * + *': {
                    mt: 2,
                  },
                  '& > * + *:before': {
                    display: 'block',
                    content: '""',
                    borderTop:
                      '1px dotted rgba(128,128,128,.5)',
                    width: '100%',
                    ml: 2,
                  },
                }}
              >
                <Grid container spacing={2} >
                  <CompareSection name="selectBrokers" />
                  <CompareDetail
                    childrenA={
                      <Autocomplete
                        disablePortal
                        id="brokerA"
                        options={brokerList}
                        value={valueA.name}
                        onChange={(event: any, newValue: any) => {
                          if(newValue) {
                            setValueA({ id:newValue.id , name: newValue.name});
                          }
                          
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                          />
                        )}
                        renderOption={(props, option) => (
                          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            {option.name}
                          </Box>
                        )}
                      />
                    }
                    childrenB={
                      <Autocomplete
                        disablePortal
                        id="brokerB"
                        options={brokerList}
                        value={valueB.name}
                        onChange={(event: any, newValue: any) => {
                          if(newValue) {
                            setValueB({ id:newValue.id , name: newValue.name});
                          }
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                          />
                        )}
                        renderOption={(props, option) => (
                          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            {option.name}
                          </Box>
                        )}
                      />
                    }
                    after={
                      <MDButton
                        variant="contained"
                        type="submit"
                        onClick={onSubmit}
                        color={'info'}
                        fullWidth
                      >
                        <MDTypography
                          variant="h3"
                          fontSize="inherit"
                          color="inherit"
                        >
                          {i18n.entities.broker.comparison.compare}
                        </MDTypography>
                      </MDButton>
                    }
                  />
                </Grid>
                {recordA && recordB && (
                  <>
                    <CompareOverview
                      recordA={recordA}
                      recordB={recordB}
                    />
                    <CompareRegulation
                      recordA={recordA}
                      recordB={recordB}
                    />
                    <CompareProfile
                      recordA={recordA}
                      recordB={recordB}
                    />
                    <CompareTradable
                      recordA={recordA}
                      recordB={recordB}
                    />
                    <CompareSpreadsAndFees
                      recordA={recordA}
                      recordB={recordB}
                    />
                    <CompareTradingPlatforms
                      recordA={recordA}
                      recordB={recordB}
                    />
                    <CompareService
                      recordA={recordA}
                      recordB={recordB}
                    />
                  </>
                )}
              </MDBox>
      </PageContent>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { query } = context
  const { slug } = query;
  let index = slug.indexOf("-versus-");

  const sortField = 'name';
  const sortOrder = "asc";

  const filter = {
    activated: true,
    category: 0
  }

  const params = {
    filter: filter,
    orderBy: sortField+"_"+sortOrder,
    limit: null,
    offset: 1,
  }

  const [
    topBrokerRes,
    categoryRes,
    mostReadRes,
    featuredBrokersRes,
    forexSchoolRes,
    forexStrategyRes,
    promotionRes,
    navigationRes,
    categoryFooterRes,
    authorRes,
    allBrokerRes
    ] = await Promise.all([
    axios.get(`${config.backendUrl}/broker/top`),
    axios.get(`${config.backendUrl}/category/sidebar`),
    axios.get(`${config.backendUrl}/navigation/most-read`),
    axios.get(`${config.backendUrl}/broker/featured`),
    axios.get(`${config.backendUrl}/navigation/forex-school`),
    axios.get(`${config.backendUrl}/navigation/forex-strategy`),
    axios.get(`${config.backendUrl}/promotion`),
    axios.get(`${config.backendUrl}/navigation`),
    axios.get(`${config.backendUrl}/category/footer`),
    axios.get(`${config.backendUrl}/author`),
    axios.get(`${config.backendUrl}/broker`, {params})
  ])
  const topBroker = topBrokerRes.data;
  const category = categoryRes.data;
  const mostRead = mostReadRes.data;
  const featuredBrokers = featuredBrokersRes.data;
  const forexSchool = forexSchoolRes.data;  
  const forexStrategy = forexStrategyRes.data;
  const promotion = promotionRes.data;
  const navigation = navigationRes.data;
  const categoryFooter = categoryFooterRes.data;
  const author = authorRes.data;
  const allBroker = allBrokerRes.data;

  const recordAReq = slug.slice(0,index);
  const recordBReq = slug.slice(index+8,slug.length);

  const recordARes = await axios.post(`${config.backendUrl}/broker`,{url: recordAReq});
  const recordA = recordARes.data;

  const recordBRes = await axios.post(`${config.backendUrl}/broker`,{url: recordBReq});
  const recordB = recordBRes.data;

  let brokerList = [] as Array<any>;
  for(var i = 0; allBroker.rows[i] ; i++) {
    brokerList[i] = { name: allBroker.rows[i].name, id: allBroker.rows[i].name_normalized };
  }

  return { props: { brokerList, author, recordA, recordB, topBroker, category, mostRead, featuredBrokers, forexSchool, forexStrategy, promotion, navigation, categoryFooter } };
};

export default BrokerComparePage;
