import React from 'react';
import '../css/signup/modal.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        개인 정보 정책
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span>최종 수정일: 2021년 1월 16일</span>>
        <br />
        <br />
        <p style={{borderBottom:'2px solid #ccc', paddingBottom:'30px'}}>
        우리는 이 정책을 최대한 단순하고 법적 근거 없이 유지하여 수집한 정보, 사용 방법 및 이에 대한 선택권을 이해하는 데 도움을 주려고 노력했습니다. 이 정책을 완전히 읽어야 하지만 다음은 주요 내용을 요약한 매우 간단한 요약입니다.
        <br />
        <br />
        <ul>
            <li>1. 우리는 귀하의 개인 데이터를 누구에게도 판매하지 않습니다. 결코, 결코 없을 것입니다.</li><br />
            <li>2. 우리가 귀하에 대해 알고 있는 모든 것은 귀하가 당사 웹사이트를 방문하고 탐색하여 공유하는 것입니다. 당사는 제3자로부터 귀하의 개인 정보를 수집하지 않으므로 공유할 항목을 결정하는 것은 전적으로 귀하에게 달려 있습니다. 예를 들어 당사 웹사이트를 가명으로 사용할 수 있습니다.</li><br />
            <li>3. 당사 웹사이트를 사용할 때 로그인하지 않은 경우에도 사용 중인 장치 유형 및 IP 주소와 같은 일부 개인 정보를 받습니다. 계정을 만들어 추가 정보를 공유하도록 선택할 수 있습니다. 우리는 이 정보를 사용하여 서비스를 개선하고 웹사이트의 기능과 보안을 유지합니다.</li><br />
            <li>4. 언제든지 뉴스레터를 선택 및 선택 해제하고 계정 세부 정보를 업데이트하거나 완전히 삭제할 수 있습니다. 또한 제출한 정보의 사본을 요청할 수도 있습니다.</li><br />
            <li>5. 설문 조사, 테스트 및 기타 도구에 대한 귀하의 답변을 사용하여 귀하와 관련된 콘텐츠를 결정하고 성격 특성에 대한 이해를 향상시킵니다. 어떤 설문 조사를 수행하고 어떤 도구를 탐색할지 완전히 자유롭게 결정할 수 있습니다.</li><br />
            <li>6. 이 정책에 대해 질문이나 의견이 있으면 주저하지 말고 연락 하십시오!</li>
        </ul>
        </p>
        <br />
        <br />
        <p>
            <h2 style={{textAlign:'left'}}>1. 어떻게 정보를 수집합니까?</h2>
            <br />
        <br />
        첫째, 당사는 귀하가 당사 웹사이트에서 공유하는 정보를 수집, 저장 및 사용합니다. 여기에는 이메일 주소, 댓글, 다른 회원에게 보낸 메시지, 웹사이트에 입력하기로 선택한 기타 정보가 포함됩니다.
        <br />
        <br />
        다른 사람의 개인 정보를 당사 웹사이트에 게시하는 경우 이 개인 정보 보호 정책에 따라 해당 개인의 개인 데이터를 공개하고 처리하는 데 해당 사람의 동의를 받아야 합니다. 그건 당신의 책임입니다.
        <br />
        <br />
        둘째, 당사 웹사이트에서 귀하 또는 타인을 위해 무언가를 구매하는 경우 당사는 지불 및 세금 정보(예: 거주 국가), 연락처 및 배송 정보(예: 이메일 주소), 귀하가 구매한 상품에 대한 세부 정보를 수집합니다. 구입했다.
        <br />
        <br />
        마지막으로 귀하가 당사 웹사이트를 사용할 때마다 특정 기술 정보를 기록합니다. 여기에는 IP 주소, 브라우저 유형 및 버전, 페이지 보기 등과 같은 귀하의 장치 및 당사 웹사이트 방문 및 사용에 대한 정보가 포함됩니다.
        <br />
        <br />
        또한 로그인 상태, 성격 테스트 결과 및 다양한 웹 사이트 설정을 저장하고 검색하기 위해 쿠키(귀하가 당사 웹사이트를 방문할 때마다 브라우저에서 저장 및 전송하는 암호화된 작은 데이터 파일)를 사용합니다. 일부 쿠키는 계정에 따라 다르지만 다른 쿠키는 그렇지 않습니다. 쿠키에 대한 자세한 내용은 다음 섹션을 참조하십시오.
        <br />
        <br />
        <h2 style={{textAlign:'left'}}>쿠키</h2>
        <br />
        당사 웹사이트의 대부분의 기능(예: 성격 테스트 결과 보기 또는 로그인)에는 쿠키가 필요합니다. 당사 웹사이트를 사용함으로써 귀하는 이 정책에 설명된 쿠키 사용에 동의하는 것입니다.

        <br />
        <br />
        당사는 웹사이트에서 "영구적" 쿠키를 사용합니다. 영구 쿠키는 삭제될 때까지 또는 지정된 만료 날짜에 도달할 때까지 장치에 저장됩니다.
        <br />
        <br />
        당사는 귀하가 당사 웹사이트를 방문할 때 당사 웹사이트가 귀하를 인식할 수 있도록 쿠키를 사용하고 당사 웹사이트 사용과 관련하여 귀하의 기본 설정을 추적합니다.
        <br />
        <br />
        당사는 Google Analytics 및 Hotjar를 사용하여 당사 웹사이트의 사용을 분석합니다. 이러한 제3자 서비스는 쿠키 및 기타 기술을 사용하여 귀하의 행동 및 장치에 대한 기술 데이터(예: 장치의 IP 주소 또는 화면 크기)를 수집할 수 있습니다. 자세한 내용은 <span style={{color:'#3ab8cf'}}>Hotjar의 개인 정보 보호 정책</span> 및 <span style={{color:'#3ab8cf'}}>Google의 개인 정보 보호 정책</span>을 참조하십시오 . 또한 언제든지 <span style={{color:'#3ab8cf'}}>Hotjar 및 Google Analytics 추적</span>을 선택 해제할 수 있습니다 .
        <br />
        <br />
        귀하와 기존 고객 관계가 있는 경우(예: 귀하가 당사로부터 무언가를 구매한 경우) Facebook Pixel을 사용하여 Facebook 광고의 효과를 분석할 수도 있습니다. Facebook 프로필이나 Facebook과 공유한 다른 데이터는 볼 수 없습니다. 여기 에서 Facebook 광고를 선택 해제할 수 있습니다 .
        <br />
        <br />
        대부분의 브라우저에서는 모든 쿠키를 거부할 수 있지만 일부 브라우저에서는 타사 쿠키만 거부할 수 있습니다. 그러나 모든 쿠키를 차단하면 당사를 포함한 많은 웹사이트의 사용성에 부정적인 영향을 미칩니다.
        <br />
        <br />
        <h2 style={{textAlign:'left'}}>귀하가 정보를 제공해야 하는지 여부와 그 이유</h2>
    
        <br />
        당사가 귀하와 통신하고 당사 웹사이트에서 제공되는 서비스를 제공하려면 연락처 및 기타 관련 정보를 제공해야 합니다. 귀하가 당사에 정보를 제공해야 하는지 여부를 귀하로부터 정보를 수집하는 시점(이 개인정보 보호정책을 통한 경우 포함)에 알려드립니다.
        <br />
        <br />
        요청한 정보를 제공하지 않으면 이 정보를 사용해야 하는 서비스(예: 특정 기능 또는 평가)를 제공하지 못할 수 있습니다.
        <br />
        <br />
        <h2 style={{textAlign:'left'}}>2. 수집한 정보를 어떻게 사용합니까?</h2>
        <br />
        당사는 수집한 정보를 사용하여 귀하에게 관련성이 있고 개인적인 콘텐츠는 물론 당사 서비스를 제공합니다. 결과적으로 다음을 위해 귀하의 정보를 사용해야 합니다.
        <br />
        <br />
        <ul>
            <li>1. <span style={{color:'#3ab8cf'}}>결과 화면이나 설정</span> 섹션 에서 요청하는 경우 성격 테스트 결과를 보내드립니다 .</li><br />
            <li>2. 비밀번호 복구 이메일과 같은 계정 관련 메시지 보내기</li><br />
            <li>3. 귀하를 식별하고 귀하의 계정 보안을 보장합니다. 예를 들어 귀하가 귀하의 계정에 연결된 이메일 주소를 소유하고 있음을 확인합니다.</li><br />
            <li>4. 귀하가 당사로부터 무언가를 구매하기로 결정한 경우 귀하로부터 지불금을 징수하고 귀하의 주문 세부 정보가 포함된 이메일을 발송합니다.</li><br />
            <li>5. 귀하와 관련된 콘텐츠 및 서비스 제공 – 예: 귀하의 성격 유형을 가진 사람들에 대한 정보</li><br />
            <li>6. 다른 회원과 연결하는 데 도움이 됩니다. 예를 들어 누군가 이메일 초대장을 보내려고 하면 자동으로 친구 요청을 생성합니다.</li><br />
            <li>7. 귀하의 질문이나 불만 사항 또는 당사 웹 사이트 사용에 대한 불만 사항에 응답합니다.</li>
        </ul>
        <br />
        <br />
        우리는 이러한 방식으로 귀하의 정보를 사용하는 데 합법적인 이해관계가 있습니다. 우리의 서비스와 콘텐츠를 최대한 귀하와 관련성 있게 만들기 위해 그렇게 하는 것이 필요하며 이는 우리 모두의 이익입니다.
        <br />
        <br />
        또한, 당사는 귀하와의 관계를 유지하고, 당사 웹사이트와 서비스를 개선하고, 귀하와 다른 사용자를 보호하는 데 합법적인 이해관계가 있습니다.
        <br />
        <br />
        결과적으로 당사는 귀하의 정보를 다음 용도로 사용합니다.
        <br />
        <br />
        <ul>
            <li>1. 귀하의 요구 사항을 더 잘 이해하고 서비스 및 경험을 최적화하기 위해 귀하가 당사 웹사이트를 사용하는 방식에 대한 분석을 수행합니다. 예를 들어, 디자인 변경 전후에 특정 페이지에서 보내는 시간을 측정하여 수정해야 할 사항이 있는지 파악할 수 있습니다. 이를 위해 당사는 타사 서비스인 Google Analytics 및 Hotjar를 사용하여 표준 인터넷 로그 정보와 방문자 행동 패턴에 대한 세부 정보(예: 성격 테스트 결과를 읽는 데 보낸 시간)를 수집합니다. 기존 고객 관계가 있는 경우 Facebook Pixel을 사용하여 Facebook 광고의 효과를 분석할 수도 있습니다. 위의 쿠키 섹션에서 이러한 서비스를 이미 언급했습니다.</li><br />
            <li style={{borderLeft:'3px solid #44AF69', paddingLeft:'10px'}}>이 정보는 아무도 식별하지 않는 방식으로만 처리됩니다. 예를 들어, 당사는 그러한 정보를 당사가 보유하고 있는 귀하에 대해 보유하고 있는 개인 데이터와 일치시키려는 어떠한 시도도 하지 않으며 Google이 하도록 허용하지도 않습니다.</li><br />
            <li>3. 웹사이트를 개선하고 새로운 기능을 개발합니다. 예를 들어, 설문 조사 중 하나의 응답자 대다수가 어려운 동료를 대하는 방법에 대해 더 알고 싶다고 말한다면 우리는 이를 확실히 고려할 것입니다.</li><br />
            <li>4. 서비스를 개선하고 성격 특성에 대한 이해를 향상시키기 위해 내부 분석 및 과학/통계 연구를 수행합니다. 예를 들어, 설문조사에 대한 귀하의 응답은 외향적인 사람이나 내성적인 사람이 일찍 일어나는 경향이 있는지 파악하는 데 도움이 될 수 있습니다. 귀하가 제공하는 원시 연구 데이터는 익명 또는 가명 처리되며 액세스가 엄격하게 제한됩니다. 자체 연구원조차도 개별 식별 정보와 다시 연결할 수 없는 데이터만 보고 집계된 통계 데이터만 게시합니다.</li><br />
            <li>5. 웹사이트를 안전하게 유지하고 사기를 방지합니다. 예를 들어 인증 시도 또는 계정과 관련된 활동을 기록합니다.</li><br />
            <li>6. 필요한 경우 법 집행 기관과 협력하는 것을 포함하여 귀하와 다른 사용자를 모두 안전하게 보호합니다. 예를 들어, 귀하가 게시한 내용으로 인해 귀하 또는 다른 사람이 즉각적인 신체적 위험에 처할 가능성이 매우 높다고 판단되는 경우 경찰에 알릴 수 있습니다.</li><br />
            <li>7. 예를 들어 다른 사용자가 괴롭힘에 대해 불평하는 경우 개인 메시지를 검토하여 웹사이트 사용에 적용되는 이용 약관의 준수 여부를 확인합니다.</li>
        </ul>
        <br />
        <br />
        우리의 정당한 이익이 우리가 하는 일의 많은 부분을 다루지만, 다음과 같은 상황에서 우리가 귀하의 개인 데이터를 처리하는 방법에 다른 법적 근거가 적용됩니다.
        <br />
        <br />
        <ul>
            <li>1. 해당 처리에 대해 귀하의 동의를 명시적으로 요구하는 경우</li><br />
            <li>2. 당사가 회원으로서 귀하에게 서비스를 제공하는 경우 – 이 경우 당사는 이에 대해 귀하와 계약을 체결하고 귀하와의 계약에 따라 귀하의 데이터를 처리합니다( 이용약관 참조 ). 특히, 당사의 계약은 당사가 동의 또는 문제의 데이터 처리에 대한 당사의 정당한 이익에 의존하는 경우 귀하가 가질 수 있는 특정 권리를 무시하는 방식으로 데이터를 보유 및 삭제할 수 있도록 허용합니다.</li><br />
            <li>3. 다른 법적 근거가 적용되는 경우(드문 경우) – 예를 들어 귀하 또는 다른 사람의 중요한 이익을 보호하기 위해 또는 법률에 따라 정보를 처리해야 하는 경우.</li>
        </ul>
        <br />
        <br />
        마지막으로 위에서 논의한 것 외에도 귀하의 동의가 있는 경우에만 귀하의 정보를 사용합니다.
        <br />
        <br />
        <ul>
            <li>1. 이메일 뉴스레터를 보내려면 이메일 뉴스레터 수신에 구체적으로 동의하고 확인 이메일의 링크를 클릭하여 확인합니다. 메시지 하단에 있는 링크를 클릭하여 언제든지 뉴스레터 구독을 취소할 수 있습니다.</li><br />
            <li>2. 귀하가 당사에 개인 데이터를 제공하는 평가가 "특수 범주" 개인 데이터(예: 귀하의 종교적 신념 또는 정치적 견해)와 관련된 경우 평가 결과를 제공하고 후속적으로 연구 목적을 위해 처리합니다(여기서 데이터는 익명 또는 가명으로 처리됩니다.) 여기에서 우리는 먼저 우리의 정당한 이익에 의존하고, 두 번째는 이에 대한 귀하의 명시적 동의에 의존합니다.</li>
        </ul>
        <br />
        <br />
        귀하는 언제든지 동의를 철회할 수 있습니다.
        <br />
        <br />
        귀하가 당사에 특별한 범주의 개인 데이터를 제공하는 경우 당사는 연구 목적으로 이 데이터를 추가로 처리할 수도 있습니다. 일반적으로 개인 데이터가 중단되도록 익명화됩니다. 이 경우 개인 데이터 처리가 관련된 범위 내에서 GDPR(일반 데이터 보호 규정)의 9.2(j)조도 따릅니다.
        <br />
        <br />
        당사는 제3자의 직접 마케팅 목적으로 귀하의 개인 정보를 제3자에게 제공하지 않습니다.
        <br />
        <br />
        <h2 style={{textAlign:'left'}}>3. 귀하의 정보를 다른 곳으로 전송합니까?</h2>
        
        <br />
        세계적인 디지털 서비스로서 우리는 웹사이트를 운영하고 우리의 서비스를 온라인으로 사용할 수 있습니다. 직원 중 일부는 EEA 외부에서도 근무합니다. 결과적으로 귀하의 개인 데이터 중 일부는 EEA 외부로 전송될 수 있습니다. 해당 국가 중 일부에는 EEA에서 시행 중인 것과 동등한 데이터 보호법이 없을 수 있습니다.
        <br />
        <br />
        GDPR이 해당 전송에 적용되는 EEA 외부로의 개인 정보 전송은 GDPR에 따라 허용되는 적절하거나 적절한 관련 보호 장치(예: 유럽 집행위원회 승인 계약)의 적용을 받으며 다음과 같은 조치를 취합니다. 귀하의 개인 정보를 오용하는 경우에 대비하여 귀하의 개인 정보 보호 권리를 보호하고 구제책을 제공합니다.
        <br />
        <br />
        일반적으로 당사는 해당 국가가 GDPR 45조(미국의 경우 프라이버시 실드 포함)에 따라 적절하다고 판단되지 않는 한 그러한 이전에 대해 계약 조항을 사용합니다(GDPR 46.2조에 따름). 또한 당사는 귀하의 개인 정보에 대한 액세스를 그러한 정보를 알아야 하는 사업상의 이유가 있는 당사 직원으로 제한합니다. 이에 대한 추가 정보가 필요하면 당사에 문의하십시오 .
        <br />
        <br />
        필요한 경우 귀하의 정보를 공유할 제3자 제공업체 목록은 다음과 같습니다.
        <br />
        <br />
        <ul>
            <li>1. MailChimp는 뉴스레터를 전달합니다. 또한 뉴스레터를 모니터링하고 개선하는 데 도움이 되도록 이메일 열기 및 클릭에 대한 통계를 수집합니다. MailChimp의 개인 정보 보호 정책은 여기 에 있습니다 .</li><br />
            <li>2. 소인 및 Microsoft, 예를 들어 당사가 귀하의 메시지에 응답할 때 뉴스레터가 아닌 이메일을 전달합니다. 다시 한 번, 우리는 배달 가능성을 개선하고 문제 해결을 돕기 위해 이메일 배달 및 개봉률에 관한 정보를 수집할 것입니다. 여기에서 Postmark의 개인 정보 보호 정책 과 Microsoft의 개인 정보 보호 정책을 찾을 수 있습니다 .</li><br />
            <li>3. Stripe 및 PayPal, 지불을 처리하고 사기 방지 검사를 수행합니다. 다음은 Stripe 및 PayPal의 개인정보 보호정책에 대한 링크입니다.</li><br />
            <li>4. 푸셔, 실시간 알림 및 개인 메시지를 전달합니다. 그들의 개인 정보 보호 정책은 여기 에 있습니다 .</li><br />
            <li>5. Google 및 UnitedHosting은 방문자의 행동을 분석하고 웹사이트, 데이터베이스, 관련 자산 및 서비스를 호스팅합니다. Google의 개인정보 보호정책은 여기 , UnitedHosting은 여기 .</li><br />
            <li>6. HelpScout, 지원 이메일을 관리하고 응답합니다. 그들의 개인 정보 보호 정책은 여기 에 있습니다 .</li><br />
            <li>7. 일상의 소통과 계획을 위한 슬랙과 아사나. 각각의 개인 정보 보호 정책은 여기 및 여기 에 있습니다 .</li>
        </ul>
        <br />
        <br />
        <div style={{borderLeft:'3px solid #44AF69', paddingLeft:'20px'}}>
        가능한 한 투명하게 모든 타사 제공업체를 여기에 나열했습니다. 실제로 "공유"는 회사 외부로 귀하의 정보를 전송할 때 매우 관대한 용어입니다. 우리는 항상 가능한 한 적은 양의 데이터를 전송하고 가능한 경우 암호화합니다. 예를 들어, 이메일 서비스 제공업체는 비밀번호 복구 링크를 전달하기 위해 귀하의 이메일 주소를 알아야 하지만 귀하의 나이는 알려주지 않습니다.

마찬가지로, 기술적으로 귀하의 정보(예: 귀하의 계정에 연결된 이메일 주소)를 Slack 서버로 전송하는 것으로 간주되는 귀하가 Slack에서 겪고 있는 문제에 대해 논의할 수 있습니다. 그러나 Slack은 이를 사용하도록 허용하지 않습니다. 우리에게 서비스를 제공하는 데 필요한 것 이상의 정보.
        </div>

        <br />
        <br />
        우리는 제3자 웹사이트의 계정과 거기에 저장된 데이터를 보호하기 위해 모든 합당한 보안 및 액세스 제어 조치를 사용합니다.
        <br />
        <br />
        귀하가 당사 웹사이트에 게시하는 정보(예: 귀하의 프로필 이름 또는 당사 토론의 게시물)는 전 세계에서 사용할 수 있습니다. 우리는 다른 사람들이 그러한 정보를 사용하거나 오용하는 것을 막을 수 없습니다.
        <br />
        <br />
            <h2 style={{textAlign:'left'}}>4. 귀하의 정보를 어떻게 관리할 수 있습니까?</h2>
        
        <br />
        당사 웹사이트에 계정이 있는 경우 설정 섹션을 사용하여 대부분의 개인 정보를 변경할 수 있습니다. 예를 들어 다음을 수행할 수 있습니다.
        <br />
        <br />
        <ul>
            <li>1. 이메일 주소를 업데이트하십시오.</li><br />
            <li>2. 프로필 이름을 수정하거나 비공개로 설정합니다.</li><br />
            <li>3. 성별을 변경하십시오.</li><br />
            <li>4. 즉각적인 알림을 관리합니다.</li><br />
            <li>5. 프로필을 삭제합니다.</li>
        </ul>
        <br />
        <br />
        프로필을 삭제하면 사용자 기록이 익명화되어 이메일 주소, 이름, 나이 등이 제거됩니다.
        <br />
        <br />
        그러나 토론의 게시물, 다른 회원에게 보낸 메시지, 테스트 및 설문 조사에 대한 응답, 로그 기록 및 기타 유사한 데이터는 삭제하지 않습니다. 우리는 다른 사용자의 표현의 자유 보호, 연구의 무결성 보호 또는 웹 사이트의 보안 보장과 같은 여러 가지 이유로 해당 데이터를 보관해야 하며 이 데이터의 보관은 우리가 다음을 위해 필요합니다. 귀하와 다른 사람들에게 서비스 를 제공 합니다.
        <br />
        <br />
        <div style={{borderLeft:'3px solid #44AF69', paddingLeft:'20px'}}>
        프로필을 삭제하기로 결정했다면 먼저 유지하려는 정보를 저장했는지 확인하십시오. 프로필이 사라지면 프로필도 사라집니다. 예를 들어, 다른 회원이 보낸 멋진 시를 저장하지 않은 경우 계정을 복구할 방법이 없습니다.
        </div>
        <br />
        <br />
        귀하는 또한 귀하가 당사에 제공한 모든 개인 데이터를 수정하거나 당사 웹사이트에서 특정 개인 식별 정보를 제거하도록 요청할 수 있습니다. 예를 들어, 실수로 귀하의 전자 메일 주소를 토론에 게시하고 삭제를 요청하면 그렇게 하겠습니다.
        <br />
        <br />
        데이터 수정 또는 제거 요청의 진위를 확인해야 하므로 계정이 항상 활성 이메일 주소에 연결되어 있는지 확인하십시오. 귀하의 이름, 주소 또는 생년월일과 같은 데이터는 요청하지 않습니다. 귀하의 이메일 주소는 유일한 실제 식별자이므로 귀하의 계정에 연결된 주소에 액세스할 수 없는 경우 계정을 소유하고 있는지 확인하는 방법입니다.
        <br />
        <br />
        <h2 style={{textAlign:'left'}}>5. 귀하의 정보를 언제 어떻게 공유합니까?</h2>
        <br />
        우선, 이름 및 성격 테스트 결과와 같은 정보를 보여주는 공개 프로필을 누구나 볼 수 있습니다. 프로필 페이지의 개요 섹션에 있는 링크를 따라가면 공개 프로필 페이지가 어떻게 보이는지 확인할 수 있으며 설정 섹션에서 프로필을 비공개로 설정할 수도 있습니다.
        <br />
        <br />
        귀하가 당사의 토론, 댓글 섹션, 번역 영역 또는 가능한 당사 웹사이트의 다른 곳에서 콘텐츠를 게시하는 경우, 귀하는 해당 정보에 대한 액세스가 자신에게만 제한된다는 것이 분명한 경우를 제외하고는 누구나 해당 정보를 읽을 수 있다고 가정해야 합니다. 또는 특정 사용자(예: 프리미엄 프로필의 비공개 메시지 또는 메모). 섹션에 따라 다른 회원도 귀하의 이름, 성별, 성격 테스트 결과, 참여 기록(예: 이전 게시물)을 볼 수 있습니다.
        <br />
        <br />
        당사 직원, 대리인, 공급업체 및 하청업체도 필요한 경우 귀하의 정보에 액세스해야 할 수 있습니다. 이는 당사 그룹의 모든 구성원(예: 당사 자회사, 당사의 최종 지주 회사 및 모든 자회사)에 적용됩니다.
        <br />
        <br />
        <div style={{borderLeft:'3px solid #44AF69', paddingLeft:'20px'}}>
        예를 들어, 귀하가 잘못된 구독을 수정하도록 요청하는 경우 당사 팀의 누군가가 이를 수행하기 위해 귀하의 계정에 액세스해야 합니다. 그러나 개인 데이터에 대한 액세스는 엄격하게 제한되고 모니터링되며 민감한 세부 정보(예: 비밀번호)는 안전하게 암호화됩니다.
        </div>
        <br />
        <br />
        그 외에도 당사가 귀하의 개인 정보를 공개할 수 있는 특정 상황이 있습니다.
        <br />
        <br />
        <ul>
            <li>1. 법에 의해 또는 진행 중이거나, 장래성이 있거나, 합리적으로 가능성이 있는(당사의 의견으로는) 법적 절차와 관련하여 그렇게 해야 하는 경우</li><br />
            <li>2. 법적 권리를 확립, 행사 또는 방어해야 하는 경우(예: 사기 방지 목적으로 다른 사람에게 정보 제공)</li><br />
            <li>3. 당사가 합병, 재구성 또는 귀하의 정보 이전을 요구하는 유사한 절차에 관여하는 경우 – 당사는 귀하의 정보를 그러한 프로세스에 관련된 당사자(예: 잠재적 구매자)와 공유합니다.</li><br />
            <li>4. 귀하 또는 다른 사람이 즉각적인 신체적 위험에 처해 있다고 믿을 만한 강력한 이유가 있는 경우(예: 토론에 게시된 자해 위협이 합리적으로 신뢰할 수 있는 경우), 현지 당국에 연락하여 다음을 제공합니다. 방지하는 데 도움이 될 수 있는 정보입니다.</li>
        </ul>
        <br />
        <br />
        당사는 웹사이트에 광고를 게재하지 않으며 귀하의 데이터를 온라인 광고주와 공유하지 않습니다. 일반적으로 위에서 논의한 경우를 제외하고 당사는 귀하의 개인 정보를 제3자와 공유하지 않습니다.
        <br />
        <br />
        <h2 style={{textAlign:'left'}}>6. 귀하의 정보를 얼마나 오래 보관합니까?</h2>
        
        <br />
        당사는 귀하에게 서비스를 제공하고 이 정책에 설명된 목적 또는 당사 이용 약관 에 달리 설명된 목적을 달성하기 위해 필요한 기간 동안만 귀하의 정보를 보관합니다 . 이는 당사가 귀하의 정보를 공유하는 다른 모든 당사자에게도 적용됩니다.
        <br />
        <br />
        다음은 보존 기간과 함께 데이터 범주의 몇 가지 예입니다.
        <br />
        <br />
        <ul>
            <li>1. 관련 액세스 로그를 포함한 결제 및 주문 데이터 – 10년</li><br />
            <li>2. 활동 로그에서 위의 값을 뺀 값 - 1년</li><br />
            <li>3. 이메일 초대 또는 비밀번호 재설정 요청과 같은 일시적인 활동 기록 – 3개월</li><br />
            <li>4. 계정 세부 정보 - 무제한;</li><br />
            <li style={{borderLeft:'3px solid #44AF69', paddingLeft:'10px'}}>의미 있는 활동과 연결되지 않고 2년 이상 비활성화된 계정은 정기적으로 삭제됩니다.</li><br />
            <li>6. 댓글이나 포럼 게시물과 같이 당사 웹사이트에 제출된 콘텐츠는 무제한입니다.</li>
        </ul>
        <br />
        <br />
        법적 또는 규제적 의무를 준수하기 위해 또는 이 정책에 설명된 기타 목적을 위해 더 이상 필요하지 않은 경우 귀하의 정보를 개인화하지 않거나 시스템에서 완전히 제거합니다.
        <br />
        <br />
        <h2 style={{textAlign:'left'}}>7. 어린이 정보는 어떻게 처리합니까?</h2>
        <br />
        귀하는 해당 국가의 법률에 따라 데이터 처리에 동의할 수 있는 연령 이상인 경우에만 당사 웹사이트를 사용할 수 있습니다. 현지 법률에 관계없이 13세 미만의 어린이는 당사 웹사이트를 사용할 수 없습니다. 귀하가 부모이고 귀하의 자녀가 당사 웹사이트를 사용하고 있다는 사실을 알게 되었고 자녀가 이를 원하지 않는 경우 당사 에 연락 하십시오.
        <br />
        <br />
        소규모 회사인 우리는 부모의 동의를 확인하고 추적할 수 있는 리소스가 없습니다. 따라서 불행히도 귀하가 해당 국가에서 동의할 수 있는 연령 미만인 경우 당사 웹사이트를 사용할 수 없습니다.
        <br />
        <br />
        <h2 style={{textAlign:'left'}}>8. 귀하의 정보로 무엇을 할 수 있습니까?</h2>
    
        <br />
        GDPR에 따라 귀하는 여러 가지 중요한 권리를 무료로 갖게 됩니다. 요약하면 다음과 같은 권리가 포함됩니다.
        <br />
        <br />
        <ul>
            <li>1. 이 개인 정보 보호 정책이 이미 다루도록 설계된 귀하의 개인 정보를 사용하는 방법에 대한 정보의 공정한 처리 및 투명성</li><br />
            <li>2. 귀하의 개인 정보 및 기타 특정 추가 정보에 대한 액세스</li><br />
            <li>3. 당사가 보유하고 있는 귀하의 정보 오류를 수정하도록 요구합니다.</li><br />
            <li>4. 특정 상황에서 귀하에 관한 개인 정보의 삭제를 요구합니다.</li><br />
            <li>5. 귀하가 당사에 제공한 귀하에 관한 개인 정보를 구조화되고 일반적으로 사용되며 기계 판독이 가능한 형식으로 수신하고 특정 상황에서 해당 데이터를 제3자에게 전송할 권리가 있습니다.</li><br />
            <li>6. 다이렉트 마케팅을 위해 귀하에 관한 개인 정보를 처리하는 것을 언제든지 반대합니다.</li><br />
            <li>7. 귀하와 관련하여 법적 효력을 발생시키거나 귀하에게 유사하게 중대한 영향을 미치는 자동화된 수단에 의한 결정에 반대합니다.</li><br />
            <li>8. 특정 상황에서 귀하의 개인 정보를 계속 처리하는 것에 반대합니다.</li><br />
            <li>9. 그렇지 않으면 특정 상황에서 귀하의 개인 정보 처리를 제한합니다.</li><br />
            <li>10. 당사가 해당 처리에 대한 합법적인 근거로 동의에 의존하는 경우 당사 처리에 대한 귀하의 동의를 철회합니다.</li><br />
            <li>11. 감독 기관에 불만을 제기할 권리.</li><br />
        </ul>
        <br />
        <br />
        적용되는 상황을 포함하여 이러한 권리 각각에 대한 자세한 내용 은 영국 정보 위원회(ICO)의 지침 을 참조하십시오. ICO는 영국의 감독 기관입니다.
        <br />
        <br />
        이러한 권리를 행사하려면 이메일을 보내주십시오 . 저희가 처리할 수 있도록 귀하의 계정과 연결된 이메일 주소에서 요청을 보내야 한다는 점을 기억하십시오. 그렇지 않으면 귀하가 계정 소유자인지 확인할 수 없습니다.
        <br />
        <br />
        위에서 이미 언급했듯이 뉴스레터 구독을 취소하려면 이메일 하단에 있는 구독 취소 링크를 클릭할 수도 있습니다. 이는 일반적으로 즉각적이지만 드물게 발생하는 데 며칠이 걸릴 수 있습니다.
        <br />
        <br />
        <h2 style={{textAlign:'left'}}>9. 귀하의 정보를 어떻게 보호합니까?</h2>
        <br />
        우리는 귀하의 개인 정보의 손실, 오용 또는 변경을 방지하기 위해 합리적인 기술적 및 조직적 예방 조치를 취합니다. 예를 들어, 우리는 이 정보를 보안(암호 및 방화벽 보호) 서버에 저장하고, 웹사이트로 들어오고 나가는 트래픽을 암호화하고, 가능한 경우 개인 정보를 익명화하거나 가명화합니다.
        <br />
        <br />
        그러나 인터넷을 통해 전송되는 데이터의 완전한 보안을 보장할 수는 없습니다. 예를 들어 누군가 우리가 사용하는 암호화 프로토콜의 취약점을 발견할 수 있고, 귀하의 인터넷 서비스 제공업체가 귀하가 전송한 데이터를 기록할 수 있는 등입니다. 민감한 정보를 게시할 때 주의하십시오.
        <br />
        <br />
        <h2 style={{textAlign:'left'}}>10. 어떻게 연락할 수 있습니까?</h2>
        <br />
        여기에서 연락처 정보를 찾을 수 있습니다 . 저희에게 연락하는 가장 좋은 방법은 이메일( support@16personalities.com )을 이용하는 것입니다.
        <br />
        <br />
        당사 NERIS Analytics Limited는 당사 웹사이트에서 수집된 정보에 대한 책임이 있는 데이터 컨트롤러입니다. 당사의 데이터 보호 등록 번호는 ZA059227입니다.
        <br />
        <br />
        <h2 style={{textAlign:'left'}}>11. 기타</h2>
        <br />
        귀하는 비밀번호 및 기타 로그인 세부 정보를 기밀로 유지할 책임이 있습니다. 그러한 정보를 가지고 있는 사람은 누구나 당사 웹사이트에 있는 귀하의 모든 정보에 완전히 액세스할 수 있으므로 그러한 정보를 누구와도 공유하지 마십시오.
        <br />
        <br />
        일부 기사 및 웹사이트 섹션에는 다른 웹사이트에 대한 링크가 포함되어 있습니다. 우리는 해당 웹사이트의 개인정보 보호정책이나 관행에 대해 책임을 지지 않습니다.
        <br />
        <br />
        당사는 웹사이트에 새 버전을 게시하여 이 개인정보 보호정책을 수시로 업데이트할 수 있습니다. 이 페이지를 가끔씩 확인하여 변경 사항이 만족스러운지 확인해야 합니다.
        <br />

        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} style={{background:'#F19904', border:'none'}}>닫기</Button>
      </Modal.Footer>
    </Modal>
  );
}

const ModalPg2 = (props) => {
    
  const [modalShow, setModalShow] = React.useState(false);
      
    return (
      <>
      <Button variant="primary" onClick={() => setModalShow(true)} style={{background:'none', color:'#000', border:'none', fontSize:'1.125rem', display:'inline', padding:0, margin:0}}>
      개인정보 보호정책
      </Button>

      <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
      />
  </>
    );
};

export default ModalPg2;