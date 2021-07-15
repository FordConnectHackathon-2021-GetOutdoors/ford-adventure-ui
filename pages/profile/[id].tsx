import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  Input,
  InputGroup,
  VStack,
} from '@chakra-ui/react';
import { Header } from 'components/Header/Header';
import { addDomEvent } from "@chakra-ui/utils";
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { NotificationContext } from 'utils/NotificationContext';
import { ImageContext } from 'utils/ImageContext';
import { supabase } from 'utils/supabase';
import _ from 'lodash';
import colors from 'themes/colors';
import { useRouter } from 'next/router';

const defaultPicLink = '../public/images/default-cover-pic.jpg';
const defaultAvatarLink = '../public/images/default-avatar.png';

export default function Profile() {
  const { query } = useRouter();
  const { id } = query;

  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeight] = useState(headerRef?.current?.clientHeight);
  
  const inputFileBg = useRef<HTMLInputElement | null>(null);
  const [bgImage, setBgImage] = useState<string>();
  const inputFileAv = useRef<HTMLInputElement | null>(null);
  const [avImage, setAvImage] = useState<string>();

  const { showError } = useContext(NotificationContext);

  const { uploadProfilePic, uploadCoverPic } = useContext(ImageContext);
  const [user, setUser] = useState({} as any);

  const [field, setField] = useState('');
  const [fieldValue, setFieldValue] = useState('');

  const [viewType] = useState(id == 'me' ? 'EDIT' : 'VIEW');

  useEffect(
    () =>
      addDomEvent(window, "resize", () =>
        setHeight(headerRef?.current?.clientHeight)
      ),
    []
  );

  useEffect(() => {
    if (headerRef.current) {
      setHeight(headerRef?.current?.clientHeight);
    }
  }, [headerRef]);

  const fetchUserPromise = useMemo(async () => {
    const user = supabase.auth.user();

    if (_.isEmpty(user) || !user) {
        return Promise.reject();
    }

    const queryUserId = id == 'me' ? user['id'] : id; 
    return await supabase
            .from('users')
            .select('*')
            .eq('user_uuid', queryUserId);
  }, [id])
  .then(({ data }) => {
    if (_.isEmpty(user) && !!data && data.length > 0) {
        setUser(data[0]);
        setBgImage(data[0]['cover_pic_base64']);
        setAvImage(data[0]['profile_pic_base64']);
    }
  }).catch(e => console.log(e));

  const updateUserPromise = useMemo(async () => {
    const user = supabase.auth.user();

    if (_.isEmpty(user) || !user) {
        return Promise.reject();
    }

    const queryUserId = id == 'me' ? user['id'] : id; 
    return await supabase
            .from('users')
            .update({ [field]: `${fieldValue}` })
            .eq('user_uuid', queryUserId);
  }, [field, fieldValue, id])
  .then(({ data }) => {
    if (_.isEmpty(user) && !!data && data.length > 0) {
        setUser(data[0]);
        setBgImage(data[0]['cover_pic_base64']);
        setAvImage(data[0]['profile_pic_base64']);
    }
  }).catch(e => console.log(e));

  // const updateUserFollowerPromise = useMemo(async () => {
  //   const user = supabase.auth.user();

  //   if (_.isEmpty(user) || !user) {
  //       return Promise.reject();
  //   }
  //   return await supabase
  //           .from('users_followers')
  //           .upsert({ [field]: `${fieldValue}` })
  //           .eq('user_uuid', user['id'] || '');
  // }, [field, fieldValue])
  // .then(({ data }) => {
  //   if (_.isEmpty(user) && !!data && data.length > 0) {
  //       setUser(data[0]);
  //       setBgImage(data[0]['cover_pic_base64']);
  //       setAvImage(data[0]['profile_pic_base64']);
  //   }
  // }).catch(e => console.log(e));

  Promise.resolve(fetchUserPromise);

  return (
    <Flex flexDir="column">
      <Flex flexShrink={1} flexDir="column" ref={headerRef}>
        <Header />
      </Flex>
      <Center position="absolute" w={'full'}>
        <Box
          w={'full'}
          overflow={'hidden'}>
          <Image
            key={Math.random()}
            alt="cover pic"
            h={'35vh'}
            w={'full'}
            src={bgImage}
            fallbacksrc={defaultPicLink}
            onClick={() => inputFileBg.current?.click()}
            layout="fill" 
            objectFit="cover"
          />
          <Input
            name="photo-upload-cover"
            type={'file'}
            multiple={false}
            hidden
            accept={'image/*'}
            ref={(refEl) => {
              inputFileBg.current = refEl;
            }}
            key={Date.now()}
            onChange={e => {
                const file = e && e.target && e.target.files && e.target.files.length > 0 ? e.target.files[0] : null;
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function () {
                        uploadCoverPic(reader.result?.toString());
                        Promise.resolve(updateUserPromise);
                    };
                    reader.onerror = function (error) {
                        showError(error);
                    };
                    reader.readAsDataURL(file);
                }
            }}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={avImage}
              fallbacksrc={defaultAvatarLink}
              onClick={() => inputFileAv.current?.click()}
              alt={'Avatar'}
              css={{
                border: '2px solid white',
              }}
            />
            <Input
              name="photo-upload-avatar"
              type={'file'}
              multiple={false}
              hidden
              accept={'image/*'}
              ref={(refEl) => {
                inputFileAv.current = refEl;
              }}
              key={Date.now()}
              onChange={e => {
                  const file = e && e.target && e.target.files && e.target.files.length > 0 ? e.target.files[0] : null;
                  if (file) {
                      const reader = new FileReader();
                      reader.onload = function () {
                          uploadProfilePic(reader.result?.toString());
                          // Promise.resolve(updateUserPromise);
                      };
                      reader.onerror = function (error) {
                          showError(error);
                      };
                      reader.readAsDataURL(file);
                  }
              }}
            />
          </Flex>

          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <VStack>
                <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} key={Math.random()}>
                  {
                    viewType == 'VIEW' && !!user['username'] ? `${user['username']}` : ''
                  }
                  { 
                    viewType == 'EDIT' && 
                    <InputGroup size="md">
                      <Input
                        type={"text"}
                        placeholder="What's your name ?"
                        textAlign="center"
                        defaultValue={user['username']}
                        onBlur={e => {
                          setField('username');
                          setFieldValue(e.target.value);
                          // Promise.resolve(updateUserPromise);
                        }}
                        borderColor={colors.text.lightGrey}
                      />
                    </InputGroup>
                  }
                </Heading>
                <Box>
                  {
                    viewType == 'VIEW' && <Text color={colors.text.darkgrey}>{ `I drive ${user['vehicle_name']}` }</Text>
                  }
                  { 
                    viewType == 'EDIT' && 
                    <InputGroup size="md">
                      <Input
                        type={"text"}
                        placeholder="What do you drive ?"
                        textAlign="center"
                        defaultValue={user['vehicle_name']}
                        onBlur={e => {
                          setField('vehicle_name');
                          setFieldValue(e.target.value);
                          Promise.resolve(updateUserPromise);
                        }}
                        borderColor={colors.text.lightGrey}
                      />
                    </InputGroup>
                  }
                </Box>
              </VStack>
            </Stack>

            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>23k</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Followers
                </Text>
              </Stack>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>23k</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Followers
                </Text>
              </Stack>
            </Stack>

            <Center>
              {
                viewType == 'VIEW' &&
                <Button
                  w={'33%'}
                  h={'2em'}
                  mt={8}
                  bg={colors.bg.darknavy}
                  color={colors.text.white}
                  rounded={'md'}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}>
                  Follow
                </Button>
              }
            </Center>
          </Box>
        </Box>
      </Center>
    </Flex>
  );
}