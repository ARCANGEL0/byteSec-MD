error: Can't locate object method "is_switching_on_payments" via package "Bookings::PartnerServices::Extranet::General::Property" at /usr/local/mason/data/hotelintranet-20241101-133649/comp_root/apache/bo/admin/hoteladmin/finance/show_dp_bank_details.html line 192. context: ... 188: my $user = Bookings::Db::Staff->readByLoginname($r); 189: 190: 191: # We need to show the hotel bank details only for B2C hotels 192: $pmodel = $u->property->is_switching_on_payments; 193: $pmodel ||= (Bookings::Payment::Config::Payout->new({hotel_id => $hotel_id})->configured) ? 1 : 0; 194: 195: #allow bank details edit if internal, to set them before putting them live, DP-631 196: $m->abort( 403 ) if ((not(AUTO_APPS_ADMIN_HOTELADMIN_FINANCE_SHOW_DP_BANK_DETAILS_HTML_BEHAVES_AS_ON_EXTRANET)) && (!$pmodel || !$user->has_right('fin_dp_read'))); ... code stack: /usr/local/mason/data/hotelintranet-20241101-133649/comp_root/apache/bo/admin/hoteladmin/finance/show_dp_bank_details.html:192 .../slib/HTML/Mason/Component.pm:124 /usr/local/mason/data/hotelintranet-20241101-133649/comp_root/apache/bo/admin/hoteladmin/finance/adminhandler.comp:2 .../slib/HTML/Mason/Component.pm:124 /usr/local/mason/data/hotelintranet-20241101-133649/comp_root/apache/bo/admin/hoteladmin/adminhandler.comp:148 .../slib/HTML/Mason/Component.pm:124 /usr/local/mason/data/hotelintranet-20241101-133649/comp_root/apache/bo/admin/adminhandler.comp:121 .../slib/HTML/Mason/Component.pm:124 /usr/local/mason/data/hotelintranet-20241101-133649/comp_root/adminhandler.comp:421 /usr/local/mason/data/hotelintranet-20241101-133649/comp_root/adminhandler.comp:422 .../slib/HTML/Mason/Component.pm:146 .../slib/HTML/Mason/Request.pm:894 /usr/local/mason/data/hotelintranet-20241101-133649/comp_root/adminhandler.comp:178 .../slib/HTML/Mason/Component.pm:124 Can't locate object method "is_switching_on_payments" via package "Bookings::PartnerServices::Extranet::General::Property" at /usr/local/mason/data/hotelintranet-20241101-133649/comp_root/apache/bo/admin/hoteladmin/finance/show_dp_bank_details.html line 192.

Trace begun at .../slib/HTML/Mason/Exceptions.pm line 129 HTML::Mason::Exceptions::rethrow_exception('Can't locate object method "is_switching_on_payments" via package "Bookings::PartnerServices::Extranet::General::Property" at /usr/local/mason/data/hotelintranet-20241101-133649/comp_root/apache/bo/admin/hoteladmin/finance/show_dp_bank_details.html line 192.^J') called at /usr/local/mason/data/hotelintranet-20241101-133649/comp_root/apache/bo/admin/hoteladmin/finance/show_dp_bank_details.html line 192 HTML::Mason::Commands::_2fapache_2fbo_2fadmin_2fhoteladmin_2ffinance_2fshow_dp_bank_details_2ehtml('_hn', 1, 'ses', '20674b4b386abcaaadd767511d0d675c', 'no_navigation', 1, 'lang', 'xb', 'page', 'internal_bank_details', 'internal_page_from_admin', 'true', 'internal_page_name', 'internal_bank_details', 'hotel_id', 5128350) called at .../slib/HTML/Mason/Component.pm line 124 HTML::Mason::Component::run('HTML::Mason::Component::FileBased=HASH(0xbeef0000)', '_hn', 1, 'ses', '20674b4b386abcaaadd767511d0d675c', 'no_navigation', 1, 'lang', 'xb', 'page', 'internal_bank_details', 'internal_page_from_admin', 'true', 'internal_page_name', 'internal_bank_details', 'hotel_id', 5128350) called at .../slib/HTML/Mason/Request.pm line 1207 eval {...} at .../slib/HTML/Mason/Request.pm line 1197 HTML::Mason::Request::comp(undef, undef, undef, '_hn', 1, 'ses', '20674b4b386abcaaadd767511d0d675c', 'no_navigation', 1, 'lang', 'xb', 'page', 'internal_bank_details', 'internal_page_from_admin', 'true', 'internal_page_name', 'internal_bank_details', 'hotel_id', 5128350) called at .../slib/HTML/Mason/Request.pm line 901 HTML::Mason::Request::call_next('HTML::MasonX::Request::ApacheLikePlackHandler=HASH(0xbeef0001)') called at /usr/local/mason/data/hotelintranet-20241101-133649/comp_root/apache/bo/admin/hoteladmin/finance/adminhandler.comp line 2 HTML::Mason::Commands::_2fapache_2fbo_2fadmin_2fhoteladmin_2ffinance_2fadminhandler_2ecomp('_hn', 1, 'ses', '20674b4b386abcaaadd767511d0d675c', 'no_navigation', 1, 'lang', 'xb', 'page', 'internal_bank_details', 'internal_page_from_admin', 'true', 'internal_page_name', 'internal_bank_details', 'hotel_id', 5128350) called at .../slib/HTML/Mason/Component.pm line 124 HTML::Mason::Component::run('HTML::Mason::Component::FileBased=HASH(0xbeef0002)', '_hn', 1, 'ses', '20674b4b386abcaaadd767511d0d675c', 'no_navigation', 1, 'lang', 'xb', 'page', 'internal_bank_details', 'internal_page_from_admin', 'true', 'internal_page_name', 'internal_bank_details', 'hotel_id', 5128350) called at .../slib/HTML/Mason/Request.pm line 1207 eval {...} at .../slib/HTML/Mason/Request.pm line 1197 HTML::Mason::Request::comp(undef, undef, undef, '_hn', 1, 'ses', '20674b4b386abcaaadd767511d0d675c', 'no_navigation', 1, 'lang', 'xb', 'page', 'internal_bank_details', 'internal_page_from_admin', 'true', 'internal_page_name', 'internal_bank_details', 'hotel_id', 5128350) called at .../slib/HTML/Mason/Request.pm line 1251 HTML::Mason::Request::scomp('HTML::MasonX::Request::ApacheLikePlackHandler=HASH(0xbeef0001)', 'HTML::Mason::Component::FileBased=HASH(0xbeef0002)', '_hn', 1, 'ses', '20674b4b386abcaaadd767511d0d675c', 'no_navigation', 1, 'lang', 'xb', 'page', 'internal_bank_details', 'internal_page_from_admin', 'true', 'internal_page_name', 'internal_bank_details', 'hotel_id', 5128350) called at /usr/local/mason/data/hotelintranet-20241101-133649/comp_root/apache/bo/admin/hoteladmin/adminhandler.comp line 148 HTML::Mason::Commands::_2fapache_2fbo_2fadmin_2fhoteladmin_2fadminhandler_2ecomp('no_navigation', 1, 'lang', 'xb', 'page', 'internal_bank_details', 'ses', '20674b4b386abcaaadd767511d0d675c', 'hotel_id', 5128350, 'internal_page_from_admin', 'true', 'internal_page_name', 'internal_bank_details', '_hn', 1) called at .../slib/HTML/Mason/Component.pm line 124 HTML::Mason::Component::run('HTML::Mason::Component::FileBased=HASH(0xbeef0003)', 'no_navigation', 1, 'lang', 'xb', 'page', 'internal_bank_details', 'ses', '20674b4b386abcaaadd767511d0d675c', 'hotel_id', 5128350, 'internal_page_from_admin', 'true', 'internal_page_name', 'internal_bank_details', '_hn', 1) called at .../slib/HTML/Mason/Request.pm line 1207 eval {...} at .../slib/HTML/Mason/Request.pm line 1197 HTML::Mason::Request::comp(undef, undef, undef, 'no_navigation', 1, 'lang', 'xb', 'page', 'internal_bank_details', 'ses', '20674b4b386abcaaadd767511d0d675c', 'hotel_id', 5128350, 'internal_page_from_admin', 'true', 'internal_page_name', 'internal_bank_details', '_hn', 1) called at .../slib/HTML/Mason/Request.pm line 901 HTML::Mason::Request::call_next('HTML::MasonX::Request::ApacheLikePlackHandler=HASH(0xbeef0001)') called at /usr/local/mason/data/hotelintranet-20241101-133649/comp_root/apache/bo/admin/adminhandler.comp line 121 HTML::Mason::Commands::_2fapache_2fbo_2fadmin_2fadminhandler_2ecomp('no_navigation', 1, 'lang', 'xb', 'page', 'internal_bank_details', 'ses', '20674b4b386abcaaadd767511d0d675c', 'hotel_id', 5128350, 'internal_page_from_admin', 'true', 'internal_page_name', 'internal_bank_details', '_hn', 1) called at .../slib/HTML/Mason/Component.pm line 124 HTML::Mason::Component::run('HTML::Mason::Component::FileBased=HASH(0xbeef0004)', 'no_navigation', 1, 'lang', 'xb', 'page', 'internal_bank_details', 'ses', '20674b4b386abcaaadd767511d0d675c', 'hotel_id', 5128350, 'internal_page_from_admin', 'true', 'internal_page_name', 'internal_bank_details', '_hn', 1) called at .../slib/HTML/Mason/Request.pm line 1207 eval {...} at .../slib/HTML/Mason/Request.pm line 1197 HTML::Mason::Request::comp(undef, undef, undef, 'no_navigation', 1, 'lang', 'xb', 'page', 'internal_bank_details', 'ses', '20674b4b386abcaaadd767511d0d675c', 'hotel_id', 5128350, 'internal_page_from_admin', 'true', 'internal_page_name', 'internal_bank_details', '_hn', 1) called at .../slib/HTML/Mason/Request.pm line 901 HTML::Mason::Request::call_next('HTML::MasonX::Request::ApacheLikePlackHandler=HASH(0xbeef0001)') called at /usr/local/mason/data/hotelintranet-20241101-133649/comp_root/adminhandler.comp line 421 HTML::Mason::Commands::ANON at .../slib/Bookings/Time/Out.pm line 128 eval {...} at .../slib/Bookings/Time/Out.pm line 131 Bookings::Time::Out::eval_with_timeout(300, 'CODE(0xbeef0005)') called at /usr/local/mason/data/hotelintranet-20241101-133649/comp_root/adminhandler.comp line 422 HTML::Mason::Commands::_2fadminhandler_2ecomp_2f('no_navigation', 1, 'lang', 'xb', 'page', 'internal_bank_details', 'ses', '20674b4b386abcaaadd767511d0d675c', 'hotel_id', 5128350, 'internal_page_from_admin', 'true', 'internal_page_name', 'internal_bank_details', '_hn', 1) called at .../slib/HTML/Mason/Component.pm line 146 HTML::Mason::Component::run_dynamic_sub('HTML::Mason::Component::FileBased=HASH(0xbeef0006)', 'main', 'no_navigation', 1, 'lang', 'xb', 'page', 'internal_bank_details', 'ses', '20674b4b386abcaaadd767511d0d675c', 'hotel_id', 5128350, 'internal_page_from_admin', 'true', 'internal_page_name', 'internal_bank_details', '_hn', 1) called at .../slib/HTML/Mason/Request.pm line 894 HTML::Mason::Request::call_dynamic('HTML::MasonX::Request::ApacheLikePlackHandler=HASH(0xbeef0001)', 'main', 'no_navigation', 1, 'lang', 'xb', 'page', 'internal_bank_details', 'ses', '20674b4b386abcaaadd767511d0d675c', 'hotel_id', 5128350, 'internal_page_from_admin', 'true', 'internal_page_name', 'internal_bank_details', '_hn', 1) called at /usr/local/mason/data/hotelintranet-20241101-133649/comp_root/adminhandler.comp line 178 HTML::Mason::Commands::main('no_navigation', 1, 'lang', 'xb', 'page', 'internal_bank_details', 'ses', '20674b4b386abcaaadd767511d0d675c', 'hotel_id', 5128350, 'internal_page_from_admin', 'true', 'internal_page_name', 'internal_bank_details', '_hn', 1) called at .../slib/HTML/Mason/Component.pm line 124 HTML::Mason::Component::run('HTML::Mason::Component::FileBased=HASH(0xbeef0006)', 'no_navigation', 1, 'lang', 'xb', 'page', 'internal_bank_details', 'ses', '20674b4b386abcaaadd767511d0d675c', 'hotel_id', 5128350, 'internal_page_from_admin', 'true', 'internal_page_name', 'internal_bank_details', '_hn', 1) called at .../slib/HTML/Mason/Request.pm line 1205 eval {...} at .../slib/HTML/Mason/Request.pm line 1197 HTML::Mason::Request::comp(undef, undef, undef, 'no_navigation', 1, 'lang', 'xb', 'page', 'internal_bank_details', 'ses', '20674b4b386abcaaadd767511d0d675c', 'hotel_id', 5128350, 'internal_page_from_admin', 'true', 'internal_page_name', 'internal_bank_details', '_hn', 1) called at .../slib/HTML/Mason/Request.pm line 428 eval {...} at .../slib/HTML/Mason/Request.pm line 428 eval {...} at .../slib/HTML/Mason/Request.pm line 395 HTML::Mason::Request::exec('HTML::MasonX::Request::ApacheLikePlackHandler=HASH(0xbeef0001)') called at .../slib/HTML/MasonX/ApacheLikePlackHandler.pm line 126 HTML::MasonX::Request::ApacheLikePlackHandler::exec('HTML::MasonX::Request::ApacheLikePlackHandler=HASH(0xbeef0001)') called at .../slib/HTML/MasonX/ApacheLikePlackHandler.pm line 345 HTML::MasonX::ApacheLikePlackHandler::handle_request('HTML::MasonX::ApacheLikePlackHandler=HASH(0xbeef0007)', 'Bookings::Plack::Request=ARRAY(0xbeef0008)') called at .../slib/HTML/MasonX/ApacheLikePlackHandler.pm line 531 eval {...} at .../slib/HTML/MasonX/ApacheLikePlackHandler.pm line 534 HTML::MasonX::ApacheLikePlackHandler::handler('HTML::MasonX::ApacheLikePlackHandler', 'Bookings::Plack::Request=ARRAY(0xbeef0008)') called at .../slib/Bookings/Mason/HotelIntranet/Handler.pm line 31 eval {...} at .../slib/Bookings/Mason/HotelIntranet/Handler.pm line 33 Bookings::Mason::HotelIntranet::Handler::handler('Bookings::Mason::HotelIntranet::Handler', 'Bookings::Plack::Request=ARRAY(0xbeef0008)') called at .../slib/Bookings/Apache/ServerTuning.pm line 1474 Bookings::Apache::ServerTuning::unstacked_handler_with_ErrorDocument_handling('Bookings::Apache::ServerTuning', 'Bookings::Plack::Request=ARRAY(0xbeef0008)') called at .../slib/Bookings/Plack/Common.pm line 645 Bookings::Plack::Common::ANON('CODE(0xbeef0009)') called at .../config/plack/common.psgi line 0 eval {...} at .../config/plack/common.psgi line 0

 https://admin.booking.com/hotel/hoteladmin/extranet_ng/manage/internal.html?lang=xb&ses=20674b4b386abcaaadd767511d0d675c&hotel_id=5128350&page=internal_bank_details