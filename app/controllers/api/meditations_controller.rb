class Api::MeditationsController < ApplicationController

    def index
        @meditations = Meditation.all
    end

    def show
        @meditation = Meditation.find_by(id: params[:id])
        if @meditation 
            render 'api/meditations/show'
        else
            render json: ['That meditation does no exist!'], status: 404
        end
    end

    private

    def meditation_params
        params.require(:meditation).permit(:title, :category, :url, :duration)
    end
end
