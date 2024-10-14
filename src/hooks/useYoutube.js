import { useQuery } from '@tanstack/react-query';

//아래 커스텀훅에서 활용될 fetching함수
const fetchYoutube = async () => {
	const api_key = import.meta.env.VITE_YOUTUBE_API;
	const pid = 'PLHtvRFLN5v-W5bQjvyH8QTdQQhgflJ3nu';
	const num = 10;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${pid}&key=${api_key}&maxResults=${num}`; 

	const json = await data.json();
	return json.items; 
}; 

//useQuery기능이 내장된 실제 호출된 커스텀훅
export const useYoutubeQuery = () =>{
  return useQuery({
    queryKey: ['youtubeList'],
    queryFn: fetchYoutube,
    staleTime: 1000*60,  //1초 x 60 1분
    gcTime: 1000*60
  });
}


/*
유튜브 데이터 fetching 함수(전달될 인수값 필요) 

useQuery활용한 커스텀 훅 함수
- queryKey : 쿼리 키 필요 요청 url을 활용해서 각 서버데이터 마다의 고유 쿼리키를 배열형태로 등록
- queryFn:  위에서 미리 제작한 유튜브 fetching함수 등록
- StaleTime: 불러온 서버 데이터의 refetching금지시간을 설정
- gcTime :garbage colletion Time  더이상 사용되지 않는 서벋이터를 메모리 해제하기까지의 시간 설정

위의 useQuery를 활용한 커스텀훅으로 부터 반환된 데이터는 미리 설정한 옵션대로 브라우저단에서 캐싱처리되며 재활용됨
데이터가 변경되면(요청url인 queryKey값이 달라지면) 다시 새롭게 fetching처리
*/
 