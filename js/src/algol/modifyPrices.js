/*
2074/5000
Michael은 상점 주인으로서 재고 목록에있는 각 품목의 이름과 판매 가격 중 n 개의 목록 (L)을 유지합니다. 
매장 직원은 판매 된 모든 품목의 판매 가격과 이름을 기록합니다. 
마이클은 그의 매니저 인 알렉스가 돈을 횡령하고 일부 품목의 판매 가격을 수정했다고 의심한다. 
Alex가 잘못된 판매 가격을 기록한 횟수를 찾는 프로그램을 작성하십시오. 

편집기에서 제공된 verifyItems 함수를 완료하여 Alex가 기록한 잘못된 판매 가격의 수를 반환합니다. 
여기에는 4 개의 매개 변수가 있습니다. 
origItems : 문자열의 배열. 각 요소는 항목 이름입니다. 
origPrices : 각 요소가 origItems의 해당 색인에있는 항목의 원래 (올바른) 가격을 포함하는 부동 소수점 숫자의 배열입니다. 
items : Alex가 기록한 판매 항목의 이름을 포함하는 문자열의 배열입니다. 
prices : 부동 소수점 숫자의 배열. 각 요소에는 해당 항목 색인의 항목에 대해 Alex가 기록한 판매 가격이 포함됩니다. 

참고 : 언어에서 요구하는 경우 배열 크기 (N 및 M)를 전달하기위한 정수 매개 변수가 2 개 더있을 수도 있습니다. 
입력 형식 편집기에서 잠긴 스텁 코드는 다음 입력을 처리하고 필요한 인수를 verifyItems 함수에 전달합니다. 
첫 번째 행에는 origItems 배열의 크기 인 N이 포함됩니다. 
N 개의 후속 행의 각 행 i (0 ≤ i <N)는 origItems의 요소 i를 설명합니다. 
다음 행에는 origPrices 배열의 크기 N이 들어 있습니다. 
N 개의 후속 라인 중 각 라인 i는 origPrices 내의 요소 i를 나타낸다. 
다음 행에는 항목 배열의 크기 인 정수 M이 포함됩니다. 
M 개의 후속 라인의 각 라인 j (여기서 0≤j <M)는 항목의 요소 j를 설명합니다. 
다음 행에는 가격 배열의 크기 인 정수 M이 포함됩니다. 
후속 M 행의 각 줄 j에는 항목의 j 요소 가격이 포함됩니다. 

제약 조건 1 ≤ N ≤ 105 1 ≤ M ≤ N 1.00 ≤ origPricesi, pricesj ≤ 100000.00, 여기서 0 ≤ i ≤ N, 0 ≤ j <M 출력 형식 Alex에 의해 판매 가격이 잘못 기록 된 항목 수를 반환합니다.


1. 이름순으로 두 배열을 정렬한다.
2. 알렉스의 배열순서대로 탐색
3. 시작은 첫번째 구한거 이후 부터. 이름순이기 때문에 한번 검색한건 또 할 필요 없음.
*/

function priceSort(array, priceArray) {
    var tempVal = '';
    var tempPrice = 0;

    for (var i = 0; i < array.length - 1; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                tempVal = array[i];
                array[i] = array[j];
                array[j] = tempVal;

                tempPrice = priceArray[i];
                priceArray[i] = priceArray[j];
                priceArray[j] = tempPrice;
            }
        }
    }
}

function verifyItems(origItems, origPrices, items, prices) {
    priceSort(origItems, origPrices);
    priceSort(items, prices);

    var diffCount = 0;
    var currSameIndex = 0;

    for (var i = 0; i < items.length; i++) {
        for (var j = currSameIndex; j < origItems.length; j++) {
            if (items[i] == origItems[j]) {
                currSameIndex = j + 1;

                if (prices[i] != origPrices[j]) {
                    diffCount++;
                }
                break;
            }
        }
    }

    return diffCount;
}

console.log(verifyItems(
    ['rice', 'sugar', 'wheat', 'cheese', 'cake'], 
    [16.89, 56.92, 20.89, 345.99, 152.00], 
    ['cheese', 'sugar', 'rice'], 
    [16.89, 400.89, 16.89]
));