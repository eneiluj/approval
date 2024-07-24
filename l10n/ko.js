OC.L10N.register(
    "approval",
    {
    "You approved {file}" : "당신이 {파일}을 승인했습니다.",
    "{user} approved {file}" : "{사용자}가 {파일}을 승인했습니다.",
    "You rejected {file}" : "당신이 {파일}을 거부했습니다.",
    "{user} rejected {file}" : "{사용자}가 {파일}(을)를 거부했습니다.",
    "Your approval was requested on {file}" : "당신의 승인이 {file}에 요청되었습니다.",
    "Your approval was requested on {file} by {who}" : "당신의 승인이 {who}에 의해 {file}에 요청되었습니다.",
    "You requested approval on {file}" : "당신은 {파일}의 승인을 요청했습니다.",
    "A guest user" : "손님 사용자",
    "Approval" : "승인",
    "<strong>Approval</strong> events" : "<strong>승인</strong> 이벤트",
    "Pending approvals" : "승인 보류 중",
    "A file was approved" : "파일이 승인 되었습니다.",
    "A file was rejected" : "파일이 거부되었습니다.",
    "A directory was approved" : "경로가 승인되었습니다.",
    "A directory was rejected" : "경로가 거부되었습니다.",
    "%1$s approved %2$s" : "%1$s승인됨%2$s",
    "%1$s rejected %2$s" : "%1$s거부됨%2$s",
    "{user} approved {node}" : "{사용자} 가 {노드}를 승인했습니다.",
    "{user} rejected {node}" : "{사용자}가 {노드}를 거부했습니다.",
    "Your approval was requested" : "당신의 승인이 요청되었습니다.",
    "%2$s requested your approval for %1$s" : "%2$s이 당신에게 %1$s에 대한 승인을 요청했습니다.",
    "{user} requested your approval for {node}" : "{사용자}가 당신에게 {노드}에 대한 승인을 요청했습니다.",
    "Rule does not exist" : "규칙이 존재하지 않습니다.",
    "This element is not shared with any user who is authorized to approve it" : "이 요소는 승인에 대한 권한이 있는 그 어떤 사용자와도 공유 되지 않습니다.",
    "Approval has already been requested with this rule for this file" : "이 파일에 대한 승인은 이미 이 규칙과 함께 요청됐습니다.",
    "You are not authorized to request with this rule" : "당신은 이 규칙과 함께 요청할 권한이 없습니다.",
    "Please check my approval request" : "제 승인 요청을 확인해주시기 바랍니다.",
    "Approval workflows" : "승인 워크플로",
    "Let users approve or reject files" : "사용자가 파일을 승인 혹은 거부하도록 합니다.",
    "Approve/reject files based on workflows defined by admins.\n\n**Warning**: The DocuSign integration is no longer part of this app\nand can be installed with [this app](https://apps.nextcloud.com/apps/integration_docusign)." : "관리자가 정의한 워크플로를 기반으로 파일을 승인/거부합니다.\n\n**경고**: DocuSign 통합은 더 이상 이 앱의 일부가 아닙니다.\n[이 앱]으로 설치할 수 있습니다.\n(https://apps.nextcloud.com/apps/integration_docusign)",
    "Each workflow defines who (which users, groups or circles) can approve files for a given pending tag and which approved/rejected tag should then be assigned." : "각 워크플로는 누가(어떤 사용자, 그룹 혹은 서클) 보류 태그가 주어지고 승인됨/거부됨 태그가 정해질 파일을 승인 가능한지 정의합니다.",
    "A list of users/groups/circles who can manually request approval can be optionally defined." : "수동적으로 승인을 요청할 수 있는 사용자/그룹/서클의 리스트는 선택적으로 정의될 수 있습니다.",
    "To be considered approved, a file/directory having multiple pending tags assigned must be approved by all the workflows involved." : "승인되었다고 여겨지기 위해서는, 연관된 다수의 보류 태그를 가지고 있는 파일/디렉토리가 관련된 모든 워크플로에게 승인되어야 합니다.",
    "You can chain approval workflows by using a pending tag as approved/rejected tag in another workflow." : "당신은 승인 워크플로의 보류 태그를 다른 워크플로의 승인됨/거부됨 태그와 같이 사용하여 승인 워크플로를 묶을 수 있습니다.",
    "All tags must be different in a workflow. A pending tag can only be used in one workflow." : "워크플로 내 모든 태그는 달라야만 합니다. 보류 태그는 오직 하나의 워크플로에서만 쓰일 수 있습니다",
    "Delete workflow" : "워크플로를 삭제하세요.",
    "No workflow yet" : "워크플로가 아직 존재하지 않습니다.",
    "New workflow" : "새로운 워크플로",
    "Create new hidden tag" : "새로운 숨겨진 태그 생성",
    "New tag name" : "새로운 태그 이름",
    "Create" : "생성",
    "Cancel" : "취소",
    "All fields are required" : "모든 필드가 요구됩니다.",
    "All tags must be different" : "모든 태그는 달라야만 합니다.",
    "Pending tag is already used in another workflow" : "보류 태그는 이미 다른 워크플로에서 사용됐습니다.",
    "Create workflow" : "워크플로 생성",
    "Failed to get approval workflows" : "승인 워크플로를 불러오는데 실패했습니다.",
    "Approval workflow saved" : "승인 워크플로가 저장됐습니다.",
    "Failed to save approval workflow" : "승인 워크플로를 저장하는데 실패했습니다.",
    "New approval workflow created" : "새로운 승인 워크플로가 생성됐습니다.",
    "Failed to create approval workflow" : "승인 워크플로를 생성하는데 실패했습니다.",
    "Approval workflow deleted" : "승인 워크플로가 삭제됐습니다.",
    "Failed to delete approval workflow" : "승인 워크플로를 삭제하는데 실패했습니다.",
    "Tag \"{name}\" created" : "\"{이름}\" 태그가 생성됐습니다.",
    "Failed to create tag \"{name}\"" : "\"{이름}\" 태그를 생성하는데 실패했습니다.",
    "Approve" : "승인",
    "Reject" : "거부",
    "Select pending tag" : "보류 태그를 선택하세요.",
    "Who can request approval?" : "누가 승인을 요청할 수 있습니까?",
    "Who can approve?" : "누가 승인할 수 있습니까?",
    "Select approved tag" : "승인된 태그를 선택하세요.",
    "Select rejected tag" : "거부된 태그를 선택하세요.",
    "Who can request approval" : "누가 승인을 요청할 수 있습니까",
    "Who can approve" : "누가 승인할 수 있습니까?",
    "Tag to act on" : "작업할 태그",
    "Tag set on approval" : "승인 시 태그가 설정됨",
    "Tag set on rejection" : "거부 시 태그가 설정됨",
    "Workflow title" : "워크플로 제목",
    "What is the purpose of this workflow?" : "이 워크플로의 목적은 무엇입니까?",
    "Request approval" : "요청 승인",
    "Approved" : "승인됐습니다.",
    "Approved by" : "의해 승인됐습니다.",
    "Rejected" : "거부됨",
    "Rejected by" : "다음에 의해 거부됨: ",
    "Approval requested by" : "의해 승인이 요청됐습니다.",
    "Approval requested" : "승인이 요청됐습니다.",
    "you" : "나",
    "The related approval workflow is: {ruleDescription}" : "관련 승인 워크플로는 다음과 같습니다. {ruleDescription}",
    "This user requested your approval" : "이 사용자가 귀하의 승인을 요청했습니다.",
    "Your approval was requested." : "당신의 승인이 요청되었습니다.",
    "No recommendations. Start typing." : "추천 없음. 타이핑을 시작하십시오",
    "No result." : "결과 없음",
    "Who?" : "상대방 정보",
    "Impossible to get user/group/circle list" : "사용자/그룹/서클 리스트를 불러올 수 없습니다.",
    "Select approval workflow" : "승인 워크플로를 선택하세요.",
    "File will be automatically shared with everybody allowed to approve." : "파일이 승인이 허락된 모든 사람에게 자동으로 공유됩니다.",
    "Can be approved by" : "의해 승인될 수 있습니다.",
    "More files to approve" : "승인해야 할 더 많은 파일",
    "No files to approve!" : "승인할 파일이 없습니다!",
    "Failed to get approval pending files" : "보류 중인 파일의 승인을 받지 못했습니다.",
    "by {name} at {date}" : "{date}에 {name}에 의해 ",
    "at {date}" : "{date}에",
    "Waiting for authorized users to approve this file" : "권한을 보유한 사용자가 이 파일을 승인하기를 기다리는 중",
    "Pending approval, you are authorized to approve" : "보류 중인 승인, 당신은 승인할 권한이 있습니다.",
    "This element was approved" : "이 요소는 승인되었습니다.",
    "This element was rejected" : "이 요소는 거부되었습니다.",
    "Pending approval" : "승인 대기중",
    "Waiting for your approval" : "귀하의 승인을 기다리는 중",
    "Failed to check approval status" : "승인 상태를 체크하는데 실패했습니다.",
    "Approval requested for {name}" : "{이름}(을)를 위한 승인이 요청됐습니다.",
    "Warning" : "경고",
    "Failed to request approval for {name}" : "{이름}을 위한 승인 요청이 실패했습니다.",
    "You approved {name}" : "당신이 {이름}(을)를 승인했습니다.",
    "Failed to approve {name}" : "{이름}을 승인하는데 실패했습니다.",
    "You rejected {name}" : "당신이 {이름}(을)를 거부했습니다.",
    "Failed to reject {name}" : "{이름}을 거부하는데 실패했습니다.",
    "Error getting OAuth access token" : "OAuth 접근을 가져오는데 오류가 발생했습니다.",
    "Error during OAuth exchanges" : "OAuth 교환 중 오류가 발생했습니다.",
    "Signature of %s" : "%s의 서명",
    "Bad HTTP method" : "옳지 않은 HTTP 메소드",
    "Bad credentials" : "옳지 않은 자격 증명",
    "OAuth access token refused" : "OAuth 접근 토큰 거부됨",
    "Approve/reject files based on workflows defined by admins.\n\n:warning: **This app will be deprecated from Nextcloud 28 onwards.\nIf you are a Nextcloud customer and you rely on this app,\nplease wait with updating to 28 and open a support ticket so we can find a solution for your use-case.**" : "관리자가 정의한 워크플로를 기반으로 파일을 승인/거부합니다.\n\n:경고: **이 앱은 Nextcloud 28부터 더 이상 사용되지 않습니다..\nNextcloud 고객이시며 이 앱을 사용하신다면,\n귀하의 사용 사례에 맞는 솔루션을 찾을 수 있도록 28로 업데이트한 후 지원 티켓을 열어주세요.**",
    "Sign with DocuSign" : "DocuSign에 서명하세요.",
    "Sign with LibreSign" : "LibreSign에 서명하세요.",
    "Your approval was requested by {name}." : "당신의 승인이 {name}에 의해 요청되었습니다.",
    "The related approval workflow is:" : "관련된 승인 워크플로는: ",
    "Request a signature via DocuSign" : "DocuSign을 통해 서명을 요청하세요.",
    "Users or email addresses" : "사용자들 혹은 이메일 주소",
    "Nextcloud users or email addresses" : "Nextcloud 사용자들 혹은 이메일 주소",
    "Recipients will receive an email from DocuSign with a link to sign the document. You will be informed by email when the document has been signed by all recipients." : "받는이는 DocuSign으로부터 문서로 연결되는 링크가 있는 이메일을 수신할 것입니다. 당신은 모든 수신자가 문서에 서명할 경우 이메일을 통해 정보를 전달 받을 것입니다.",
    "Request signature" : "서명을 수신 받습니다.",
    "Recipients will receive an email from DocuSign to sign the document" : "받는이는 문서에 서명하기 위해 DocuSign으로부터 이메일을 수신할 것입니다.",
    "Failed to request signature with DocuSign" : "DocuSign에서 서명을 요청하는데 실패했습니다.",
    "DocuSign integration" : "DocuSign 통합",
    "DocuSign is an electronic signature solution." : "DocuSign은 전자 서명 솔루션입니다.",
    "If you want to use DocuSign, create an application in your DocuSign \"My Apps & Keys\" developer account settings and put the client ID (integration key) and secret below." : "DocuSign을 이용하려면, 당신의 DocuSign의 \"My Apps & Keys\" 개발자 계정 설정에서 신청서를 제출하고 그 안에 클라이언트 ID(통합 key)와 암호를 입력하십시오.",
    "Make sure you set this \"Redirect URI\":" : "\"Redirect URI\"를 설정하는 것을 잊지 마세요:",
    "If your DocuSign user is associated with multiple DocuSign accounts, the default one will be used." : "만약 당신의 DocuSign 사용자가 다수의 DocuSign 계정으로 이루어져 있다면, 기본 계정이 사용될 것입니다.",
    "Client ID (aka integration key)" : "클라이언트 ID (통합 key라고도 불림)",
    "Client ID of your application" : "당신의 신청서의 클라이언트 ID",
    "Application secret key" : "애플리케이션 비밀 키",
    "Secret key of your application" : "당신의 신청서의 비밀 key",
    "Connect to DocuSign" : "DocuSign에 연결합니다.",
    "Connected as {user} ({email})" : "{user} ({email})(으)로 연결됨",
    "Disconnect from DocuSign" : "DocuSign으로부터 연결을 끊습니다.",
    "Successfully connected to DocuSign!" : "DocuSign에 성공적으로 연결됐습니다!",
    "OAuth access token could not be obtained:" : "OAuth 접근 토큰을 얻을 수 없었습니다: ",
    "DocuSign admin options saved" : "DocuSign 관리자 설정이 저장됐습니다.",
    "Failed to save DocuSign admin options" : "DocuSign 관리자 설정을 저장하는데 실패했습니다.",
    "Failed to save DocuSign OAuth state" : "DocuSign 관리자 설정을 저장하는데 실패했습니다.",
    "You will receive an email from DocuSign to sign the document" : "당신은 문서에 서명하기 위한 이메일을 DocuSign으로부터 받을 것입니다.",
    "The user who requested this approval was not found, remember to send or share the signed document yourself" : "이 승인을 요청한 사용자를 찾을 수 없습니다, 서명된 문서를 자신에게 보내거나 공유할 것을 기억하십시오.",
    "Approval signature" : "승인 서명",
    "{name} signature requested via LibreSign" : "{이름}의 서명이 LibreSign이 요청됐습니다.",
    "Impossible to sign this document" : "이 문서에 서명하는 것은 불가능합니다.",
    "Pending approval, you are authorized to approve." : "보류 중인 승인, 당신은 승인할 권한이 있습니다.",
    "Show approval details" : "승인에 대한 세부 사항을 보여줍니다."
},
"nplurals=1; plural=0;");
