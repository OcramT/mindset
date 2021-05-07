class Api::CompletedmeditationsController < ApplicationController
    before_action :require_logged_in, only: [:destroy, :create, :index]

    def index 
       @completed_meditations = CompletedMeditation.all
       @user = current_user
       @user_meds = Meditation.all
                        .joins(:completed_meditations)
                        .where(completed_meditations: { user_id: @user.id })
        render 'api/completed_meditations/index'
    end

    def create
        @user = current_user
        @med_id = params[:medId]
        @user_med = CompletedMeditation.new(user_id: @user.id, meditation_id: @med_id, completed: false)
        if @user_med.save
            render 'api/completed_meditations/show'
        else
            render json: @user_med.errors.full_messages, status: 422
        end
    end

    def destroy
        @user_med = CompletedMeditation.find_by(meditation_id: params[:id])
        @user_med.destroy
    end

    private

    def usermed_params
        params.require(:completedmeditations).permit(:user_id, :meditation_id, :completed)
    end

end
