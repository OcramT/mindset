class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    helper_method :current_user, :logged_in?
    
    private

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def login(user)
        @current_user = user
        session[:session_token] = @current_user.reset_session_token!
    end

    def logout
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    # def require_logged_in
    #     render 'api/users/show' unless logged_in?
    # end

    def require_logged_in
        unless current_user
            render json: ['Invalid Credentials'], status: 401
        end
    end

    # def require_logged_out
    #     redirect_to root_url if !logged_in?
    # end
end
