class Api::MeditationsController < ApplicationController

    def index
        @meditations = Meditation.all
        @flag = params[:flag]
        if @flag == 'all'
            render 'api/meditations/all'
        end
    end

    def show
        @meditation = Meditation.find_by(id: params[:id])
        if @meditation 
            render 'api/meditations/show'
        else
            render json: ['That meditation does not exist!'], status: 404
        end
    end

    def destroy
        @med_id = MeditationPack.select(:meditation_id).where(id: params[:id])
        @meditation = MeditationPack.find_by(id: params[:id])
        @meditation.destroy
    end

    private

    def meditation_params
        params.require(:meditation).permit(:title, :category, :url, :duration, :flag)
    end
end
